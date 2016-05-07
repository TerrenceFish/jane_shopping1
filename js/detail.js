$(function(){
    myfunction1();
    myfunction2();
    myfunction3();
    me();
    colorChange();
    jqzoom();
    prosize();
    proprice();
}); 
      /*window.onload=myfunction4();*/
       function myfunction1(){
		$(".img2").click(function(){
	    $(".img00").css('display','block');
	    $(".img01").css('display','none');
	    $(".img02").css('display','none');
	    $("#left_top").show(1000);
		});
		
	}	
	function myfunction2(){
          $(".img3").click(function(){
		  $(".img01").css('display','block');
		  $(".img00").css('display','none');
		  $(".img02").css('display','none');
          $("#left_top").show(1000);
		});
	}
     function myfunction3(){
     	  $(".img4").click(function(){
		  $(".img02").css('display','block');
		  $(".img00").css('display','none');
		  $(".img01").css('display','none');
         $("#left_top").show(1000);
		});
     }
    /*  var img=$("img");
    $(function(){
        for(i=0;i<2;i++){
            $("img[i]").jqzoom({ //绑定图片放大插件jqzoom
                    zoomWidth: 357.188, //小图片所选区域的宽
                    zoomHeight: 252, //小图片所选区域的高
                    zoomType: 'reverse' //设置放大镜的类型
                });
        }
     	
     });*/
   /* function myfunction4(){
        $("#btn1").click(function(){
        $("#tabs-1").show(500);
        $("#tabs-2").css('display','none');
        $("#tabs-3").css('display','none');
        $("#btn1").css('background','#6D84B4');
        $("#btn2").css('background','#EBEBEB');
        $("#btn3").css('background','#EBEBEB');
        });   
    }
    function myfunction5(){
        $("#btn2").click(function(){
        $("#tabs-1").css('display','none');
        $("#tabs-2").show(500);
       $("#tabs-3").css('display','none');
        $("#btn1").css('background','#EBEBEB');
        $("#btn2").css('background','#6D84B4');
        $("#btn3").css('background','#EBEBEB');
        });   
    }
    function myfunction6(){
        $("#btn3").click(function(){
        $("#tabs-1").css('display','none');
        $("#tabs-2").css('display','none');
        $("#tabs-3").show(500);
        $("#btn1").css('background','#EBEBEB');
        $("#btn2").css('background','#EBEBEB');
        $("#btn3").css('background','#6D84B4');
        });   
    }*/

     function me(){ 
      $("#tabs div:eq(1)").css('display','block'); 
      $(".tab li").click(function(){
      $(".tab li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
      $("#tabs div").eq($(".tab li").index(this)).show().siblings().hide(); 
      });         
 }

     function colorChange(){
        $("#left div:eq(0)").css('display','block');
        $("#change_color li").click(function(){
          /*for(i=0;i<$("#change_color li").index(this);i++){
            $("#left div").eq($("#change_color li").index(this)).show();
          }*/
          /*找到ID=left的直系子元素的下标*/
        $("#left").children().eq($("#change_color li").index(this)).show().siblings().hide();
        $("#left #divtest").css('display','block');
        });
     }
     function jqzoom(){

     /* $("#jqzoom").jqzoom({  
                    xzoom: 200, //放大图的宽度(默认是 200)  
                    yzoom: 200, //放大图的高度(默认是 200)  
                    xoffset: 10, //离原图的距离(默认是 10)
                    yoffset: 10, 
                    position: "right", //放大图的定位(默认是 "right")  
                    preload:1     
       
       });*/
        
}
      function prosize(){
        $(".pro_size ul li").click(function(){
          $(".pro_size strong").text($(this).text());
        });
}
      function proprice(){
        $("#num_sort").change(function(){
          $("#spanprice").html($(this).val()*200); 
        });
     /* $("#num_sort").selectbox();*/
} 