import{o as l,c as n,F as u,a as o,b as e}from"./app.ab5650d0.js";const s={},d=o("h1",{id:"图片尺寸与分辨率",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#图片尺寸与分辨率","aria-hidden":"true"},"#"),e(" 图片尺寸与分辨率")],-1),c=o("p",null,[e("显示图像的 "),o("code",null,"宽度"),e("、"),o("code",null,"高度"),e(" 与 "),o("code",null,"分率"),e(" 等信息")],-1),a=o("p",null,[o("strong",null,"操作"),e("：（菜单栏）"),o("code",null,"图像"),e(" -> "),o("code",null,"图像大小(I)...")],-1),i=o("ul",null,[o("li",null,[e("分辨率显示"),o("strong",null,"每英寸的像素点")]),o("li",null,[e("行业标准的分辨率为 "),o("strong",null,[o("code",null,"300ppi")]),e("（"),o("code",null,"ppi"),e("= pixels/inch 像素每英寸 vs "),o("code",null,"dpi"),e("= dots/inch）")]),o("li",null,[e("将图像大小尺寸单位转换为 "),o("code",null,"英寸"),e(" 可以显示出打印尺寸（默认分辨率下），可以通过 "),o("strong",null,"操作"),e("：（菜单栏）"),o("code",null,"视图"),e(" -> "),o("code",null,"打印尺寸(z)"),e(" 初略地预览图片打印效果（基于显示器）")]),o("li",null,"改变分辨率，可改变打印尺寸")],-1),r=o("p",null,[o("strong",null,"说明"),e("：在修改（增大）图片尺寸，且使用了 "),o("code",null,"重新采样(s)"),e("，可保持图片分辨率不变，但会显得模糊。 由于增加的像素是 Photoshop 推算得出，依赖现有的像素生成插值（估算得出）。")],-1),p=o("p",null,[e("⚠️ 谨慎使用 "),o("code",null,"重新采样(s)")],-1),t=o("p",null,[o("img",{src:"/blog-design/assets/20191016082147918_19094.7586cf95.png",alt:"重新采样"}),o("em",null,"长按鼠标左侧预览图可查看原图，松开鼠标左键可显示修改后的效果图，方便进行对比")],-1);s.render=function(o,e){return l(),n(u,null,[d,c,a,i,r,p,t],64)};export default s;