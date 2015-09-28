# jQuery-dw_paging
前端jquery分页插件,只需后端传一个参数.
##API
###dw_paging(max,len,pream);

`max`:最大页数（总页数） 唯一需要后端传的一个参数: 总页数. 就是 sum/size 数.

`len`:分页菜单的长度.默认为10;

`pream`url?后面的判定的参数,默认为page=
##例:
```html
<html>
  <head>
    <style>
    .dw_pading , .dw_paging_body{line-height: 30px;height: 30px; font-size:20px;float: left;}
    .dw_pading{padding:0 3px;height: 30px;margin:1px;text-align: center;cursor:pointer }
    .dw_pading:hover{color:#00a8e2}
    #dw_paging{margin:0 auto;}
    .dw_pading.dw_on{color:#00a8e2}
    .dw_pading.dw_disable{color:#999;cursor:default;}
    </style>
  </head>
  <body>
    <div id="dw_paging">
        <div class="dw_pading">prev</div>
        <div class="dw_pading">1</div>
        <div class="dw_pading">....</div>
        <div class="dw_paging_body"></div>
        <div class="dw_pading">....</div>
        <div class="dw_pading"></div>
        <div class="dw_pading">next</div>
      </div>
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.1.min.js"></script>
<script src="jQuery-dw_paging.js"></script>
<script>
$('#dw_paging').dw_paging(30);
</script>
  </body>
</html>
```
