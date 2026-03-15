function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
});

}



function openPopup(type){

let text="";

if(type==="loingo"){
text = `
<h2>Lời Ngỏ</h2>

<p style="text-align:center;font-style:italic;">
Sang sông phải bắc cầu kiều<br>
Muốn con hay chữ phải yêu lấy thầy.
</p>

<p>
Sinh ra mỗi người đều hình thành cho mình những ước mơ và hoài bão trong tương lai.
Để đạt được điều đó, không ai trong chúng ta có thể quên công lao to lớn của thầy cô.
Từng nét chữ, từng bài giảng, từng lời dạy bảo ân cần của thầy cô đã trở thành hành
trang quý giá theo chúng em suốt chặng đường dài.
</p>

<p>
Nhắc đến nghề giáo, chắc hẳn ai cũng sẽ nghĩ đến một nghề cao quý – nghề “trồng người”.
Thầy cô giống như những người lái đò thầm lặng, ngày ngày đưa bao thế hệ học sinh
cập bến tri thức. Những bài giảng trên lớp không chỉ giúp chúng em mở mang kiến thức
mà còn dạy chúng em cách sống, cách làm người.
</p>

<p>
Nhân ngày Nhà giáo Việt Nam 20-11, tập thể chúng em xin gửi đến thầy cô những lời tri ân
sâu sắc nhất. Kính chúc thầy cô luôn mạnh khỏe, hạnh phúc và tiếp tục dìu dắt chúng em
trên con đường chinh phục tri thức.
</p>
`;
}

if(type==="truyen"){
text = `
<h2>Truyện Ngắn</h2>

<h3>Cắm hoa trên sắc, hoa nở trong tim</h3>

<p>
Sáng 10/11, sân trường đông nghịt. Các lớp chen chúc chuẩn bị cho hội thi cắm hoa mừng Ngày Nhà giáo Việt Nam.
Không khí rộn ràng, ai cũng hối hả tìm cho mình chỗ đứng để cắm hoa trưng bày tác phẩm.
Trong giây lát, cả sân trường bỗng hóa thành một bức tranh đầy màu sắc, hương thơm của hoa tươi.
</p>

<p>
Đội cắm hoa của 12A3 đến sau, ngó thấy chỗ nào cũng đã "có chủ".
Ba đứa cắm hoa chỉ biết đứng lóng ngóng với bó hoa ôm trong tay,
chẳng biết nên xử lý thế nào.
</p>

<p>
Bỗng thầy Hùng - Chủ nhiệm lớp 12A3 bước tới.
Thầy lặng nhìn rồi như một người cha trấn an những đứa con của mình:
<br><br>
- Các em đứng ở đây đợi thầy, không cần đi đâu hết!
</p>

<p>
Rồi thầy bước tới đến cô Chi nói điều gì đó,
1 phút sau thầy đến và bảo đi theo thầy.
</p>

<p>
Dừng lại một góc bàn đã có người, thầy nói:
<br><br>
- Các em di chuyển về lớp mình nhé, đây là bàn của lớp 12A3 của thầy!
</p>

<p>
Vậy là đội cắm hoa của lớp đã có cho mình một chỗ cắm hoa dành cho riêng mình.
Cả đội vui lắm, khi cắm xong còn xì xào ngưỡng mộ hành động của thầy nữa.
</p>

<p>
Thầy vẫn luôn như vậy, trong ba năm phổ thông của lớp chúng tôi –
người cha luôn quan tâm đến 41 đứa con bé nhỏ.
</p>

<p>
Dù lúc ấy chưa công bố giải thưởng nhưng 41 đứa trò nhỏ
đã có cho mình một phần thưởng lớn –
một người thầy, người cha luôn luôn đứng về phía mình
dù chỉ là rắc rối nhỏ.
</p>
`;
}

if(type==="tho"){
text = `
<h2>Bài Thơ</h2>

<h3>Việt Nam trong trái tim tôi</h3>

<p style="text-align:center;">
Lòng yêu nước nảy mầm từ lời ru<br>
Nở rộ hoa rong sử vàng đất nước<br>
Ngược thời gian theo chân người đi trước<br>
Tôi thấy mình sống lại cùng non sông.
</p>

<p style="text-align:center;">
Hỡi em ơi, liệu em có thấy không?<br>
Kia Bạch Đằng Giang ta đại thắng<br>
Thăng Long thành thế rồng cuộn sững lặng<br>
Ngàn năm rồi vẫn chói lọi vàng son.
</p>

<p style="text-align:center;">
Lặng lại chút nghe tiếng thở nước non<br>
Lời Nam Quốc Sơn Hà chia định phận<br>
Tiếng Hịch truyền lời đanh thép, căm hận<br>
Giữa thời bình còn nghe tiếng sục sôi.
</p>

<p style="text-align:center;">
Việt Nam đẹp trong trái tim tôi<br>
Đẹp trong từng tấc đất tấc thịt<br>
Người anh hùng áo vải khói đen kịt<br>
Đạp quân thù, đuổi nội phản an dân.
</p>

<p style="text-align:center;">
Trục thời gian lại nhích chuyển xoay vần<br>
Từng câu chuyện như múa bay trên giấy<br>
Vẫn còn đây nhành ban đỏ năm ấy<br>
Ghi dấu ấn Điện Biên Phủ lẫy lừng.
</p>

<p style="text-align:center;">
Ngày hôm nay cả dân tộc vui mừng<br>
Vì Tổ quốc đã tự do, độc lập<br>
Niềm hạnh phúc trong trái tim đang đập<br>
Trang sử mới Việt Nam mãi vững bền.
</p>
`;
}

if(type==="mem1"){
text = `
<h2>Kỷ Niệm 1</h2>

<img src="images/sinh nhật thầy Hùng.jpg" class="memory-img">

<p>Sinh nhật thầy Hùng – một ngày rất vui của lớp. 
Cả lớp cùng nhau chuẩn bị bánh và bất ngờ chúc mừng thầy 🎂</p>
`;
}

if(type==="mem2"){
text = `
<h2>Kỷ Niệm 2</h2>

<img src="images/HĐTN11.jpg" class="memory-img">

<p>Hoạt động trải nghiệm đáng nhớ của lớp tại 
Bảo tàng Lịch sử Quân sự Việt Nam.</p>
`;
}

if(type==="mem3"){
text = `
<h2>Kỷ Niệm 3</h2>

<img src="images/HĐTN12.jpg" class="memory-img">

<p>Chuyến tham quan Hoàng Thành Thăng Long cùng thầy 
và những người bạn của lớp.</p>
`;
}


document.getElementById("popupText").innerHTML=text;

document.getElementById("popup").style.display="flex";

}



function closePopup(){

document.getElementById("popup").style.display="none";

}


function addWish(){

let name = document.getElementById("name").value;
let message = document.getElementById("message").value;

if(name === "" || message === ""){
alert("Vui lòng nhập đầy đủ thông tin");
return;
}

let wish = {
name: name,
message: message
};

// lấy danh sách lời chúc cũ
let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

// thêm lời chúc mới
wishes.push(wish);

// lưu lại
localStorage.setItem("wishes", JSON.stringify(wishes));

// hiển thị lại
displayWishes();

document.getElementById("name").value = "";
document.getElementById("message").value = "";

}


function displayWishes(){

let wishList = document.getElementById("wish-list");
wishList.innerHTML = "";

let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

wishes.forEach((wish,index) => {

let wishHTML = `
<div class="wish">
<p>${wish.message}</p>
<span class="sender">— ${wish.name}</span>
<button class="delete-btn" onclick="deleteWish(${index})">Xoá</button>
</div>
`;

wishList.innerHTML += wishHTML;

});

}


function deleteWish(index){

let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

wishes.splice(index,1);

localStorage.setItem("wishes", JSON.stringify(wishes));

displayWishes();

}


// khi tải trang
window.onload = function(){
displayWishes();
};

function openImage(src){

let popup = document.getElementById("imagePopup");
let img = document.getElementById("popupImg");

img.src = src;

popup.style.display = "flex";

}

function closeImage(){

document.getElementById("imagePopup").style.display = "none";

}
