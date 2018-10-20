var MongoClient = require('mongodb');
var driver = {} 

var conn = MongoClient.connect('mongodb://localhost:27017/mycart')
 

//insert a new User
driver.addUser = function(req){
 user=req.body
    console.log("Testn 1");
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 console.log("Testn 1");
        var collection = dataBase.collection('users');
 console.log("Testn 1");
    return collection.insert(user).then(function(result) {
 return result;
 });
 });
}




//update User Details
driver.updateUser = function(req,res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('users');
        old_user_id=req.body[1];
        new_user=req.body[0];
        console.log("To be searched for "+old_user_id);
 return collection.findOneAndUpdate({"user_id":old_user_id},new_user,
  {returnOriginal:false}).then(function(result) {
 console.log("Query Processed");
                         console.log(result.value);
                         return (result.value);
 });
 });
}



//update Address Details
driver.updateAddress = function(req,res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('addresses');
        old_address_id=req.body[1];
        new_address=req.body[0];
        console.log("To be searched for "+old_address_id);
 return collection.findOneAndUpdate({"address_id":old_address_id},new_address,
  {returnOriginal:false}).then(function(result) {
 console.log("Query Processed");
                         console.log(result.value);
                         return (result.value);
 });
 });
}





//insert an Item To The Cart
driver.addToCart = function(req){
 detail=req.body
    return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
        var collection = dataBase.collection('cart');
 console.log("Cart IS present Now");
    console.log("Adding This : "+detail+" "+ detail.user_id +" "+detail.quantity);
    // Required while coping products from guest 
    var detailx={"user_id":detail.user_id, "prod_id":detail.prod_id, "img_url":detail.img_url, "name":detail.name, "category":detail.category, "price":detail.price,"discount":detail.discount, "quantity":detail.quantity};

    return collection.insert(detailx).then(function(result) {
 console.log("result is "+result);
    return result;
 });
 });
}





//Add an address To Database
driver.addAddress = function(req){
 detail=req.body
    return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
        var collection = dataBase.collection('addresses');
 console.log("Address Document is present now");
    console.log("Adding This :"+ detail.user_id +" "+detail.street);
    
    return collection.insert(detail).then(function(result) {
 console.log("result is "+result);
    return result;
 });
 });
}






//insert an Item To The WishList
driver.addToWishlist = function(req){
 detail=req.body
    return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
        var collection = dataBase.collection('wishlist');
 console.log("Wishlist is present Now");
    console.log("Adding This : "+detail+" "+ detail.user_id);
    // Required while coping products from guest 
    var detailx={"user_id":detail.user_id, "prod_id":detail.prod_id, "img_url":detail.img_url, "name":detail.name, "category":detail.category, "price":detail.price,"discount":detail.discount};

    return collection.insert(detailx).then(function(result) {
 console.log("result is "+result);
    return result;
 });
 });
}



    
    
    //get all Products 
driver.findPrdAll = function(req){
 return conn.then(function(mongoClientInstance) {
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('products');
 console.log("For This :"+req.body.name);
 return collection.find(req.body).toArray();
 }).then(function(items) {
 var prod_names=[];
         for(var i=0;i<items.length;i++)
         {
             prod_names.push(items[i].name);
         }
         console.log(items);
 
         return items;
 });
};






    //get all Searches 
driver.getSearch = function(req){
 return conn.then(function(mongoClientInstance) {
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('products');
 console.log("For This Name:"+req.body.name);
 
         var name=req.body.name;
         name="^"+name;
         console.log("Now Name Becomes "+name);
         
         return collection.find({"name":{$regex:name,$options:"$i"}}).toArray();
 }).then(function(items) {
 var prod_names=[];
         for(var i=0;i<items.length;i++)
         {
             prod_names.push(items[i].name);
         }
         console.log(items);
 
         return items;
 });
};






//Check IF User Has Bought The Product 
driver.hasBought = function(req){
 return conn.then(function(mongoClientInstance) {
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('orders');
 console.log("For This Product:"+req.body.prod_id);
 
         var id=req.body.prod_id;
         var user = req.body.user_id;
         console.log("Searching For "+id);
         
         return collection.find({"product_ids":{$regex:id,$options:"$i"},"user_id":user}).toArray();
 }).then(function(items) {
 console.log("Result Of search is "+items);
         return items;
 });
};








    //get all Products of wishlist 
driver.findAllWishlist = function(req){
 return conn.then(function(mongoClientInstance) {
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('wishlist');
 
 return collection.find(req.body).toArray();
 }).then(function(items) {
 
         return items;
 });
};







//get all Address of Perticular user 
driver.getAddressList = function(req){
 return conn.then(function(mongoClientInstance) {
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('addresses');
 return collection.find(req.body).toArray();
 }).then(function(items) {
 
         return items;
 });
};


// Check If User and password Exists

driver.checkPresense = function(req){
 return conn.then(function(mongoClientInstance) {
         console.log("test1");
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('users');
 var qur = req.body;   
         new_obj={"user_id":"","password":""};
         new_obj['user_id']=req.body.user_id;
         new_obj['password']=req.body['password'];
         console.log("Following Is The password");
         console.log(new_obj['password']);
         console.log(new_obj['user_id']);
         
         return collection.find(new_obj).toArray();
 }).then(function(doc) {
 // var prod_names=[];
         // for(var i=0;i<items.length;i++)
         // {
             // prod_names.push(items[i].name);
         // }
            console.log(doc);
            return doc[0];
        
 });
};



// Check If User Alone Exists

driver.checkUser = function(req){
 return conn.then(function(mongoClientInstance) {
         console.log("test1");
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('users');
 var qur = req.body;   
         new_obj={"user_id":""};
         new_obj['user_id']=req.body.user_id;
         console.log("Following Is The UserID");
         
         console.log(new_obj['user_id']);
         
         return collection.find(new_obj).toArray();
 }).then(function(doc) {
 console.log(doc);
            return doc[0];
        
 });
};





// To get data of ny user
driver.getUserData = function(req){
 return conn.then(function(mongoClientInstance) {
         console.log("test1");
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('users');
 var qur = req.body;   
         console.log("Following Is The User For whom query is to be done");
         console.log(req.body.user_id);
         
         return collection.find(req.body).toArray();
 }).then(function(doc) {
 console.log("Following Is returned");
         console.log(doc);
            return doc[0];
 });
};



// Check If product Exists in the users cart already
driver.isItemInCart = function(req){
 return conn.then(function(mongoClientInstance) {
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('cart');
 var qur = req.body;   
         console.log("Checking Presense of following roduct");
         console.log(req.body);
         console.log(req.body.name)
         return collection.find(req.body).toArray();
 }).then(function(doc) {
            console.log(doc);
            return doc;
 });
};




// Check If product Exists in the users Wishlist already
driver.isItemInWishlist = function(req){
 return conn.then(function(mongoClientInstance) {
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('wishlist');
 var qur = req.body;   
         console.log("Checking Presense of following roduct");
         return collection.find(req.body).toArray();
 }).then(function(doc) {
            console.log(doc);
            return doc;
 });
};





//update Quantity In cart
driver.updateQuantity = function(req,res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('cart');
        user_id=req.body.user_id;
        prod_id=req.body.prod_id;
        quantity=req.body.quantity;
 return collection.findOneAndUpdate({"user_id":user_id,"prod_id":prod_id}, {$inc:{"quantity":quantity}},
  {returnOriginal:false}).then(function(result) {
 return result;
 });
 });
}







//update Reviews For products 
driver.addReview = function(req,res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('products');
        name=req.body.user_name;
        console.log(("In the name of now ")+name);
        prod_id=req.body.prod_id;
        comment=req.body.comment;
 return collection.update(
                                {"prod_id":prod_id},
                                { $push: {feedback:{"user_name":name, "comment":comment} }}).then(function(result) {
                                return result;
                                });
                                });
                                }








//delete a product from cart
driver.removeItem = function(req, res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('cart');
    console.log("Fetching Body");   
    console.log("Fetching Body");   
        var user_id=req.body.user_id;
        var prod_id=req.body.prod_id;
    console.log("User_id is : "+user_id+"Product iss : "+ prod_id);
 return collection.findAndRemove({"user_id":user_id,"prod_id":prod_id}).then(function(result) {
 console.log(result);
    return result;
 });
 });
}



//delete a product from cart
driver.emptyCart = function(req, res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('cart');
        var user_id=req.body.user_id;
        
    console.log("User_id is : "+user_id);
 return collection.deleteMany({"user_id":user_id}).then(function(result) {
 console.log(result);
    return result;
 });
 });
}





//delete a product from wishlist
driver.removeWish = function(req, res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('wishlist');
    console.log("Fetching Body");   
    console.log("Fetching Body");   
        var user_id=req.body.user_id;
        var prod_id=req.body.prod_id;
    console.log("User_id is : "+user_id+"Product iss : "+ prod_id);
 return collection.findAndRemove({"user_id":user_id,"prod_id":prod_id}).then(function(result) {
 console.log(result);
    return result;
 });
 });
}







//Remove An Address from database
driver.removeAddress = function(req, res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('addresses');

        var address_id=req.body.address_id;
        
    console.log("Address_id is : "+address_id);
 return collection.findAndRemove({"address_id":address_id}).then(function(result) {
 console.log(result);
    return result;
 });
 });
}





//update Card Details
driver.updateCard = function(req,res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('cards');
        old_card_id=req.body[1];
        new_card=req.body[0];
        console.log("To be searched for "+old_card_id);
 return collection.findOneAndUpdate({"card_id":old_card_id},new_card,
  {returnOriginal:false}).then(function(result) {
 console.log("Query Processed");
                         console.log(result.value);
                         return (result.value);
 });
 });
}



//update Order Status
driver.updateOrder = function(req,res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('orders');
        order_id=req.body.order_id;
        
        
        new_status=req.body;
        console.log("To be searched for "+order_id);
 return collection.findOneAndUpdate({"order_id":order_id},{"card_no":req.body.card_no, "card_type":req.body.card_type, "status":req.body.status, "date":req.body.date, "comp":req.body.comp, "order_id":req.body.order_id, "action":req.body.action, "product_list":req.body.product_list, "product_ids":req.body.product_ids, "total_bill":req.body.total_bill, "user_id":req.body.user_id,},
  {returnOriginal:false}).then(function(result) {
 console.log("Query Processed");
                         console.log(result.value);
                         return (result.value);
 });
 });
}









//Add an Card To Database
driver.addCard = function(req){
 detail=req.body
    return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
        var collection = dataBase.collection('cards');
 console.log("Card Document is present now");
    console.log("Adding This :"+ detail.user_id +" "+detail.street);
    
    return collection.insert(detail).then(function(result) {
 console.log("result is "+result);
    return result;
 });
 });
}






//Add a Notification To Database
driver.addNotification = function(req){
 detail=req.body
    return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
        var collection = dataBase.collection('notifications');
 console.log("Notification Document is present now");
    //console.log("Adding This :"+ detail.user_id +" "+detail.message);
    order_id=detail.order_id;
    product_list=detail.product_list;
    console.log(detail.product_list);
    return collection.insert(detail).then(function(result) {
 console.log("result is "+result);
    return result;
 });
 });
}





//get all Notifications of Perticular user 
driver.getNotifications = function(req){
 return conn.then(function(mongoClientInstance) {
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('notifications');
 return collection.find(req.body).toArray();
 }).then(function(items) {
 
         return items;
 });
};






//Add an Order To Database
driver.addOrder = function(req){
 detail=req.body
    return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
        var collection = dataBase.collection('orders');
 console.log("Orders Document is present now");
    console.log("Adding This :"+ detail.product_list +" "+detail.order_id);
    
    return collection.insert(detail).then(function(result) {
 console.log("result is "+result);
    return result;
 });
 });
}






//get all Card of Perticular user 
driver.getCardList = function(req){
 return conn.then(function(mongoClientInstance) {
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('cards');
 return collection.find(req.body).toArray();
 }).then(function(items) {
 
         return items;
 });
};





//get all Card of Perticular user 
driver.getOrders = function(req){
 return conn.then(function(mongoClientInstance) {
         var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('orders');
 return collection.find(req.body).toArray();
 }).then(function(items) {
 
         return items;
 });
};






//Remove An Card from database
driver.removeCard = function(req, res){
 return conn.then(function(mongoClientInstance) {
     var dataBase = mongoClientInstance.db();
 var collection = dataBase.collection('cards');

        var card_id=req.body.card_id;
        
    console.log("Card_id is : "+card_id);
 return collection.findAndRemove({"card_id":card_id}).then(function(result) {
 console.log(result);
    return result;
 });
 });
}





module.exports = driver;

