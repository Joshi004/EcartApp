var express = require('express');
var routing = express.Router();

var DAL= require('./query.js');


//insert an user
routing.post('/addUser', function(req,res){
 console.log("request received for adding new employee in database!!");
 return DAL.addUser(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "You are registered Please Login!"});
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
// Updating User in databse
routing.put('/updateUser', function(req,res){
 console.log("request received for updating User Details");
 //empid = parseInt(req.body.EmpId);
 return DAL.updateUser(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );
    
    
    
    
    
    
// Updating Address in databse
routing.put('/updateAddress', function(req,res){
 console.log("request received for updating Address Details");
 
 return DAL.updateAddress(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );
    
    
    

    
//insert Item In Cart
routing.post('/addToCart', function(req,res){
 console.log("request received for adding new product in cart!!");
 return DAL.addToCart(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "You are registered Please Login!"});
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    
    
    
//Add address to database
routing.post('/addAddress', function(req,res){
 console.log("request received for adding new Address in database!!");
 return DAL.addAddress(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "Address has been added!"});
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    
    
    
    
//insert Item In Wishlist
routing.post('/addToWishlist', function(req,res){
 console.log("request received for adding Product to wishlist!!");
 return DAL.addToWishlist(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "You are registered Please Login!"});
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    //get all the products
routing.post('/getAllProducts', function(req, res){
 console.log("request received for retreiving employee details from database!!");
 return DAL.findPrdAll(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );
    
    
    
    
    
    
    //get all the Searches
routing.post('/getSearch', function(req, res){
 console.log("request received for retreiving employee details from database!!");
 return DAL.getSearch(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );
    
    
    
    
    
    
//Check If User has Bought te product
routing.post('/hasBought', function(req, res){
 console.log("request received for checking if user has bought the product!!");
 return DAL.hasBought(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );
    
    
    
    
    

    
    //get all the Wishlist products
routing.post('/getAllWishlist', function(req, res){
 console.log("request received for retreiving All wishlist!!");
 return DAL.findAllWishlist(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    
    //get all the Addresses of perticular user
routing.post('/getAddressList', function(req, res){
 console.log("request received for retreiving All address of req.body.user_id");
 return DAL.getAddressList(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    
//Check If the user Password is correct
routing.post('/checkPresense', function(req, res){
 console.log("request received for retreiving employee details from database!!");
 return DAL.checkPresense(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items);
 }).catch(function (err) {
 res.json(req.body.current_user);
 })
 }
 );
    
    
    
    //Check If the user Exists
routing.post('/checkUser', function(req, res){
 console.log("request received for retreiving user details from database!!");
 return DAL.checkUser(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items);
 }).catch(function (err) {
 res.json("sorry there is some error");
 })
 }
 );
    
    
    
    
//Get Details of a user
routing.post('/getUserData', function(req, res){
 console.log("request received for retreiving User details from database!!");
 return DAL.getUserData(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items);
 }).catch(function (err) {
 res.json("There is an error Dude");
 })
 }
 );

//Check If the item is present in the cart or not
routing.post('/isProductInCart', function(req, res){
 console.log("request received for retreiving item details from cart document in database!!");
 return DAL.isItemInCart(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items);
 }).catch(function (err) {
 res.json("Sorry There is an error in checking item from cart");
 })
 }
 );

    

//Check If the item is present in the cart or not
routing.post('/isProductInWishlist', function(req, res){
 console.log("request received for retreiving item details from Wishlist in database!!");
 return DAL.isItemInWishlist(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items);
 }).catch(function (err) {
 res.json("Sorry There is an error in checking item from cart");
 })
 }
 );

    

//update Quantity In Cart

routing.put('/updateQuantity', function(req,res){
 console.log("request received for updating Quantity Of item in he cart!!");
 //empid = parseInt(req.body.EmpId);
 return DAL.updateQuantity(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );


    
    
//update Quantity In Cart

routing.post('/addReview', function(req,res){
 console.log("request received for Adding Review");
 //empid = parseInt(req.body.EmpId);
 return DAL.addReview(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );


    
    
    



//delete Cart Items
routing.post('/removeItem', function(req,res){
 console.log("request received for Removing and item from cart database!!");
 //EmpId = parseInt(req.body.EmpId);
 
 return DAL.removeItem(req).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "Item deleted!"}); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );
    
    
    
    
    
//delete Cart Items
routing.post('/emptyCart', function(req,res){
 console.log("request received for Removing and item from cart database!!");
 //EmpId = parseInt(req.body.EmpId);
 
 return DAL.emptyCart(req).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "Item deleted!"}); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );



    
//delete Wishlist Item
routing.post('/removeWish', function(req,res){
 console.log("request received for Removing and item from Wishlist database!!");
 //EmpId = parseInt(req.body.EmpId);
 
 return DAL.removeWish(req).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "Item deleted!"}); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    
    //delete Address from database
routing.post('/removeAddress', function(req,res){
 console.log("request received for Removing Address from database!!");

 return DAL.removeAddress(req).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "Address deleted!"}); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );


    
    
    
    
    
    
// Updating Card in databse
routing.put('/updateCard', function(req,res){
 console.log("request received for updating Card Details");
 
 return DAL.updateCard(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );
    

    
        
    
// Updating Order in databse
routing.put('/updateOrder', function(req,res){
 console.log("request received for updating Order Details");
 
 return DAL.updateOrder(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );
    

    
    
    
    
//Add Card to database
routing.post('/addCard', function(req,res){
 console.log("request received for adding new Card in database!!");
 return DAL.addCard(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "Card has been added!"});
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    
//Add Notification to database
routing.post('/addNotification', function(req,res){
 console.log("request received for adding new Notification in database!!");
 return DAL.addNotification(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "Card has been added!"});
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );


    //get all the Notifications of perticular user
routing.post('/getNotifications', function(req, res){
 console.log("request received for retreiving All Notifications of req.body.user_id");
 return DAL.getNotifications(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    
    
    
        
    
//Add Order to database
routing.post('/addOrder', function(req,res){
 console.log("request received for adding new Order in database!!");
 return DAL.addOrder(req,res).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "Order has been added!"});
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    
    
    
    //get all the Cards of perticular user
routing.post('/getCardList', function(req, res){
 console.log("request received for retreiving All card of req.body.user_id");
 return DAL.getCardList(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    
    
    //get all the orders of perticular user and type
routing.post('/getOrders', function(req, res){
 console.log("request received for retreiving All orders of "+req.body.user_id+" of tyupe "+req.body.status);
 return DAL.getOrders(req).then(function(items) {
 console.info('The promise was fulfilled with items!',items);
 res.json(items); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );

    
    
    
    
    
    
    //delete Card from database
routing.post('/removeCard', function(req,res){
 console.log("request received for Removing Card from database!!");

 return DAL.removeCard(req).then(function(items) {
 console.info('The promise was fulfilled with items!', items);
 res.json({"message": "Card deleted!"}); 
 }).catch(function (err) {
 res.json({"message": "sorry, Error here"});
 })
 }
 );


    
    


module.exports = routing;
