---
layout: post
comments: true
title:  "AngularJS - Bootstrapping Data using ASP.NET MVC and Razor View"
date:   2014-09-22
categories: posts
---


I found myself recently working on a MVC 5 project with Razor views, and for some reason I wanted to use AngularJS. Well not for just any reason, because AngularJS awesome! This situation is one I can imagine is fairly common as many people start working with client side JavaScript frameworks. In my case I started working with AngularJS a few months ago and for one reason or another it has just stuck with me and has become sort of a go to for me.

This solution is not very complicated and seems to work fairly well for what I needed. I will demonstrate a simple example below where I use some data passed from the controller and data bind a dropdown using AngularJS.

So to start out you have a controller action that does something and then returns a view (basic). In the controller the I will take the data that I want bootstrapped to the view and put it in a variable on the `ViewBag`.

{% highlight c# %}


public async Task<ActionResult> Edit(int? id)
{
    if (id == null)
    {
        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
    }
    Order order = await db.Orders.FindAsync(id);
    if (order == null)
    {
        return HttpNotFound();
    }

    db.Products.Add(new Product() { Id = 1, Name = "Cookie", Price = 4 });
    db.Products.Add(new Product() { Id = 2, Name = "Coke", Price = 2 });
    db.SaveChanges();

    ViewBag.Products = db.Products.Select(p => new { p.Id, p.Name, p.Price });

    return View(order);
}

{% endhighlight %}


Then on the view you can simply declare a global JavaScript variable. I also added a reference to my app.js file. Then from there you can access the data in your angular controller and set the scope variable that you want to bind the dropdown’s data to. Here is my razor view below, you can see I set the `ng-controller` to the `productController`. Also the select element has the `ng-model` set to `SelectedProduct`. The ng-options is set to `item.Name for item in products track by item.Id` which sets the values in the drop down using the items in the products scope object. I also set the `ng-app=”app”` in the layout view.



{% highlight c# %}


@model AngularBootstrapingDataExample.Models.Order

@{
    ViewBag.Title = "Edit";
}

<h2>Edit</h2>


@using (Html.BeginForm())
{
    @Html.AntiForgeryToken()

    <div class="form-horizontal" ng-controller="productController">
        <h4>Order</h4>
        <hr />
        @Html.ValidationSummary(true, "", new { @class = "text-danger" })
        @Html.HiddenFor(model => model.Id)

        <div class="form-group">
            @Html.LabelFor(model => model.Date, htmlAttributes: new { @class = "control-label col-md-2" })
            <div class="col-md-10">
                @Html.EditorFor(model => model.Date, new { htmlAttributes = new { @class = "form-control" } })
                @Html.ValidationMessageFor(model => model.Date, "", new { @class = "text-danger" })
            </div>
        </div>

        <div class="form-group">
            @Html.LabelFor(model => model.Product, htmlAttributes: new { @class = "control-label col-md-2" })
            <div class="col-md-10">
                <select class="form-control" id="Product" name="Product" ng-model="SelectedProduct" ng-options="item.Name for item in products track by item.Id" ng-change="selectedproductchagned()"></select>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-offset-2 col-md-10">
                <input type="submit" value="Save" class="btn btn-default" />
            </div>
        </div>
    </div>
}

<div>
    @Html.ActionLink("Back to List", "Index")
</div>

@section Scripts {
    @Scripts.Render("~/bundles/jqueryval")
    <script>
        bootstrappedProducts = @Html.Raw(Json.Encode(ViewBag.Products)) ;
    </script>
    <script src="~/Scripts/angular.min.js"></script>
    <script src="~/App/app.js"></script>
}


{% endhighlight %}




Then, here is my basic angular app with a controller (in the same JS file just for readability sake). See where the `$scope.products` get set the global variable ` bootstrappedProducts` that we set from the data in the razor view. And I have an empty function where future functionality can be added.






{% highlight javascript %}


(function () {
    angular.module("app", []);
}());

(function (app) {
    var productController = function ($scope, $http) {

        $scope.products = bootstrappedProducts;

        $scope.selectedproductchagned = function () {
              //add code here
        };



    };
    app.controller("productController", ["$scope", "$http", productController]);

}(angular.module("app")));


{% endhighlight %}


If I build my solution and had some test data into the products table then navigate to the view I have been working on. I can view the source on the page I can see where the data from the products is set into the JavaScript variable.


![]({{ site.url }}{{ site.baseurl }}/assets/angularbootstrapdatasource.jpg)

And then I can see my dropdown is populated with the items I specified in the `ng-options`.

![]({{ site.url }}{{ site.baseurl }}/assets/angularbootstrapdatadropdown.jpg)

Then to see it all in action I use Batarang to look at the scope to see that the `$scopt.products` contains all my products, then if I select an option in the dropdown you can see the `SelectedProduct` is set to the object out of the products array that you selected in the dropdown. This can be very useful because it data binds the whole object and not just the `Id` or value that is specified in the select element.




![]({{ site.url }}{{ site.baseurl }}/assets/angularbootstrapdatabatarang.jpg)
