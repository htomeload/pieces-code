window.onload = function(){   
    //Check File API support
    if(window.File && window.FileList && window.FileReader)
    {
		$('#images').change( function(event) {
			$(".thumbnail").parent().remove();
            var files = event.target.files; //FileList object
            var output = document.getElementById("outpost");
                var file = files[0];
				var file_name = event.target.files[0].name;
                //Only pics
                if(file.type.match('image.*')){
                    if(this.files[0].size < 10485760){    
                  // continue;
                    var picReader = new FileReader();
                    picReader.addEventListener("load",function(event){
                        var picFile = event.target;
                        var div = document.createElement("div");
                        div.innerHTML = "<img class='thumbnail' id='thumbnail' src='" + picFile.result + "'" +
                                "title='preview image' style='width: 15rem; height: 15rem; margin-right: 1.5rem; margin-bottom: 1.5rem;' />";
                        output.insertBefore(div,null);     
                    });
                    //Read the image
                    picReader.readAsDataURL(file);
                    }else{
                        alert("Image Size is too big. Minimum size is 2MB.");
                        $(this).val("");
                    }
                }else{
                alert("You can only upload image file.");
                $(this).val("");
				}                   
           
        });
    }
    else
    {
        console.log("Your browser does not support File API");
    }
}
