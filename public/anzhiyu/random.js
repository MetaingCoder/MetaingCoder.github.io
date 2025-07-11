var posts=["2025/07/11/hello-world/","2025/07/11/My-New-Post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };