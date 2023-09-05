const Post = require('../models/post');
// var popup = require('popups');

module.exports.create = function(req, res){
    if(req.body.content != ""){
        Post.create({
            content: req.body.content,
            user: req.user._id
        }, function(err, post){
            if(err){
                console.log('Error in creating a port');
                return;
            }
        })
    }
    else{
        console.log("Type something to post");
        // popup.alert({
        //     content: 'Type something to post'
        // });
    }

    return res.redirect('back');

}
