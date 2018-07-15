# yinbiao-input

####音标输入演示
    <div class="text">
        <input type="text" id="yingbiaoInput">
        <button id="output">打印内容</button>
    </div>

    <script>
        $("#yingbiaoInput").ybInput();
        $('#output').click(function (e) {
            e.stopPropagation();
            alert($("#yingbiaoInput").val())
        })
    </script>