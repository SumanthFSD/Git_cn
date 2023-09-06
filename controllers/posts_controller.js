const Post = require('../models/post');
const Comment = require('../models/comment');
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

module.exports.destroy = function(req,res){
    Post.findById(req.params.id, function(err, post){
        // .id means converting the object id into string
        if(post.user == req.user.id){
            post.remove();
            Comment.deleteMany({post: req.params.id}, function(err){
                return res.redirect('back');
            });
        }else{
            return res.redirect('back');
        }
    });
}

