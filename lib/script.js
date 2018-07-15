document.write("<script src='js/gg.js'></script>");
//首页文章图片滚动
var art_nowid=0;  //当前id
var art_time=3600;  //停顿时间
var art_totle=4;    //图片总数
var art_object;   //循环函数对象
function art_photo_stop(a)
{
    clearInterval(art_object);
    art_nowid=a;
    for(m=0;m<art_totle;m++)
    {
        n="img_art_"+m;
        p="img_tit_"+m;
        h="art_"+m;
        if(art_nowid==m)
        {
            document.getElementById(n).className="art_img_show";
            document.getElementById(p).className="art_tit_show";
            document.getElementById(h).className="art_bt_show";
        }
        else
        {
            document.getElementById(n).className="art_img_notshow";
            document.getElementById(p).className="art_tit_notshow";
            document.getElementById(h).className="art_bt_notshow";
        }
    }
}
function art_photo_change(a)
{
    art_nowid=a;
    art_object=setInterval("art_photo_doChange()",art_time);
}
function art_photo_doChange()
{
    art_nowid=(art_nowid+1)%art_totle;
    for(m=0;m<art_totle;m++)
    {
        n="img_art_"+m;
        p="img_tit_"+m;
        h="art_"+m;
        if(art_nowid==m)
        {
            document.getElementById(n).className="art_img_show";
            document.getElementById(p).className="art_tit_show";
            document.getElementById(h).className="art_bt_show";
        }
        else
        {
            document.getElementById(n).className="art_img_notshow";
            document.getElementById(p).className="art_tit_notshow";
            document.getElementById(h).className="art_bt_notshow";
        }
    }
}
//图片滚动类
function form_move(demo,demo1,demo2,mydir)
{
    this.tab=document.getElementById(demo);
    this.tab1=document.getElementById(demo1);
    this.tab2=document.getElementById(demo2);
    this.tab2.innerHTML=this.tab1.innerHTML;
    this.mydir=mydir;
    this.Marquee = function()
    {
        if(this.mydir=="top")
        {
            if(this.tab2.offsetHeight-this.tab.scrollTop<=0) this.tab.scrollTop-=this.tab1.offsetHeight;
            else this.tab.scrollTop++;
        }
        else if(this.mydir=="left")
        {
            if(this.tab2.offsetWidth-this.tab.scrollLeft<=0) this.tab.scrollLeft-=this.tab1.offsetWidth;
            else this.tab.scrollLeft++;
        }
    }
    this.getId = function()
    {
        return this.tab;
    }
}
//登录验证
function CheckLoginForm(form)
{
    if(form.zhanghao.value=="")
    {
        alert("请输入账号！");
        return false;
    }
    if(form.mima.value=="")
    {
        alert("请输入密码！");
        return false;
    }
}
//用于控制menu被选
function showmenu(ID)
{
    var IDObj_index = document.getElementById( "menu_" + ID );
    IDObj_index.className='menu_btn_choose';
}

//用于首页记单词跳转
function hpDicGo()
{
    var radio=document.getElementsByName("dic_type");
    for(var i=0;i<radio.length;i++)
    {
        if(radio[i].checked==true)
        {
            window.location.replace('22-'+radio[i].value+'-0.html');
        }
    }
}

//用于搜索
function chk_init(t,b)
{
    a=document.getElementById(t);
    if(a.value=="")
    {
        a.value=b;
        a.style.color='#aaa';
    }
}
function chk_click(t,b) {
    if(t.value==b)
    {
        t.value='';
        t.style.color='#000000';
    }
}
function chk_leave(t,b)
{
    if(t.value=='')
    {
        t.value = b;
        t.style.color='#aaa';
    }
}
function trim(s)
{
    s=s.replace(/(^\s*)/g, "");
    s=s.replace(/(\s*$)/g, "");
    return s;
}
function checkSearchForm(form)
{
    mykeyword=trim(form.search_keywords.value);
    if(mykeyword=="请输入一个关键词"||mykeyword=="")
    {
        alert("请输入一个关键词");
        return false;
    }
}
//创建ajax对象
var xmlhttp;
var myclass;
var myid;
function initXMLHttp()
{
    if(window.ActiveXObject)
    {
        try
        {
            xmlhttp=new ActiveXObject("Msxml2.XMLHttp");
        }
        catch(e)
        {
            try
            {
                xmlhttp=new ActiveXobject("Microsoft.XMLHttp");
            }
            catch(e)
            {
            }
        }
    }
    else if(window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
        if(xmlhttp.overrideMimeType)
        {
            xmlhttp.overrideMimeType("text/xml");
        }
    }
}
//增加点击数
function xmlClickAdd(a,b)
{
    myclass=a;
    myid=b;
    if((myclass=="a3"||myclass=="a6"||myclass=="a9")&&!confirm("你确定要举报吗?"))
    {
        return false;
    }
    initXMLHttp();
    mytime=new Date().getTime();
    url="public/click_add.php?t="+mytime+"&myclass="+myclass+"&myid="+myid;
    xmlhttp.open("GET",url,true);
    xmlhttp.onreadystatechange = xmlClickAdd_back;
    xmlhttp.send(null);
}
function xmlClickAdd_back()
{
    if(xmlhttp.readyState==4&&xmlhttp.status==200)
    {
        if(xmlhttp.responseText=="no") alert("抱歉！不能重复操作");
        else if(xmlhttp.responseText=="ok")
        {
            alert("操作成功");
            if(myclass!="a3"&&myclass!="a6"&&myclass!="a9")
                document.getElementById(myclass+"_"+myid).innerHTML=1+parseInt(document.getElementById(myclass+"_"+myid).innerHTML);
        }
        else alert("操作失败，请重试或联系管理员");
    }
}
//用于英语单词在线学
function checkDictionaryChange()
{
    var temp_str=trim(document.getElementById("search_keywords").value);
    if(temp_str==""||temp_str=="请输入一个英语单词")
    {
        document.getElementById("search_keywords_rst").innerHTML="";
        return false;
    }
    initXMLHttp();
    mytime=new Date().getTime();
    url="public/checkdictionary.php?t="+mytime+"&mykeywords="+temp_str;
    xmlhttp.open("GET",url,true);
    xmlhttp.onreadystatechange = xmlcheckregist_back;
    xmlhttp.send(null);
}
function xmlcheckregist_back()
{
    if(xmlhttp.readyState==4&&xmlhttp.status==200)
    {
        document.getElementById("search_keywords_rst").innerHTML=xmlhttp.responseText;
    }
}
//刷新验证码
function change_img()
{
    mytime=new Date().getTime();
    document.getElementById('vdimgck').src='../public/vdimgck.php?id='+mytime;
}
//用于留言框边框颜色
function change_border() {
    var IDObj_index = document.getElementById("mydl_click");
    IDObj_index.className='mydl_click';
}
//用于留言框输入验证
function checkreplyform(form)
{
    var my_error_str="";
    if(form.reply_content.value=="")
    {
        my_error_str="错误：请输入内容！";
    }
    else if(form.reply_content.value.length>10000)
    {
        my_error_str="错误：内容不能超过10000个字！";
    }
    else if(form.reply_code.value=="")
    {
        my_error_str="错误：请输入验证码！";
    }

    if(my_error_str!="")
    {
        document.getElementById("mynotice").innerHTML=my_error_str;
        return false;
    }
}
//用于文章发布框输入验证
function checkarticleform(form)
{
    var my_error_str="";
    if(form.article_class.selectedIndex==0)
    {
        my_error_str="错误：请选择文章类型！";
    }
    else if(form.article_title.value=="")
    {
        my_error_str="错误：请输入文章标题！";
    }
    else if(form.article_title.value.length>255)
    {
        my_error_str="错误：文章标题长度不能超过255个字符！";
    }
    else if(form.article_content.value=="")
    {
        my_error_str="错误：请输入文章内容！";
    }
    else if(form.article_content.value.length>30000)
    {
        my_error_str="错误：文章内容不能超过3万个字符！";
    }
    else if(form.article_code.value=="")
    {
        my_error_str="错误：请输入验证码！";
    }

    if(my_error_str!="")
    {
        document.getElementById("mynotice").innerHTML=my_error_str;
        return false;
    }
}
//用于帖子发布框输入验证
function checkforumform(form)
{
    var my_error_str="";
    if(form.forum_class.selectedIndex==0)
    {
        my_error_str="错误：请选择帖子类型！";
    }
    else if(form.forum_title.value=="")
    {
        my_error_str="错误：请输入帖子标题！";
    }
    else if(form.forum_title.value.length>255)
    {
        my_error_str="错误：帖子标题长度不能超过255个字符！";
    }
    else if(form.forum_content.value=="")
    {
        my_error_str="错误：请输入帖子内容！";
    }
    else if(form.forum_content.value.length>30000)
    {
        my_error_str="错误：帖子内容不能超过3万个字符！";
    }
    else if(form.forum_code.value=="")
    {
        my_error_str="错误：请输入验证码！";
    }

    if(my_error_str!="")
    {
        document.getElementById("mynotice").innerHTML=my_error_str;
        return false;
    }
}
//用于音标翻译工具
function checkform_translater(form)
{
    if(form.words_str.value=="")
    {
        alert("请输入英文原文！");
        return false;
    }
    else if(form.words_str.value.length>2000)
    {
        alert("英文原文不能超过2000个字符！");
        return false;
    }
}
//用于音标编辑
var arr=new Array();
var arr_index=0;
function add(a)
{
    console.log(a)
    document.getElementById("myresult").value=document.getElementById("myresult").value+a.innerHTML;
}
function do_reduce()
{
    var abc=document.getElementById("myresult").value;
    document.getElementById("myresult").value=abc.substring(0,abc.length-1);
}
function do_delete()
{
    document.getElementById("myresult").value="";
}
//用于音标翻译
function checkPhoneticForm(form)
{
    mykeyword=trim(form.phonetic_keywords.value);
    if(mykeyword=="请输入一个单词音标"||mykeyword=="")
    {
        alert("请输入");
        return false;
    }
}
//播放发音
function show_voice(DWName)
{
    document.write('<object height="20" width="20" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">');
    document.write('<param name="movie" value="/images/dic/wordplay.swf">');
    document.write('<param name="quality" value="high">');
    document.write('<param name="wmode" value="transparent">');
    document.write('<param value="url=/words/'+DWName+'.mp3&amp;auto=0&amp;loopCount=1" name="FlashVars">');
    document.write('<embed height="20" width="20" src="/images/dic/wordplay.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent" flashvars="url=/words/'+DWName+'.mp3&amp;auto=0&amp;loopCount=1">');
    document.write('</object>');
}
//导航条切换
function showBtn(id)
{
    myTemBtn=document.getElementById(id+"_1");
    myTemBtn.className="second_show";
}
function notshowBtn(id)
{
    myTemBtn=document.getElementById(id+"_1");
    myTemBtn.className="second";
}
//原创工具显示简介
function showAdv(id)
{
    myTemBtn=document.getElementById(id+"_1");
    myTemBtn.className="adv_show";
}
function notshowAdv(id)
{
    myTemBtn=document.getElementById(id+"_1");
    myTemBtn.className="adv_notshow";
}
<!--显示日期-->
function showDate()
{
    var Stamp=new Date();
    var dayNames=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");

    document.write(Stamp.getFullYear()+"年"+(Stamp.getMonth()+1)+"月"+Stamp.getDate()+"日 "+dayNames[Stamp.getDay()]);
}
