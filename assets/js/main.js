const telegram = "https://t.me/+14379896363";
const whatsapp = "https://wa.me/+14379896363?text=hi";
const instagram = "https://instagram.com/";

$(document).ready(function () {
  //append social container
  $("body").append(
    `<div class="socialContainer">
        <div class="col">
            <a target="_blank" href="${whatsapp}">
                <img src="../assets/images/whatsapp.png" />
            </a>
            <a target="_blank"  href="${instagram}">
                <img src="../assets/images/instagram.png" />
            </a>
            <a target="_blank"  href="${telegram}">
                <img src="../assets/images/telegram.png" />
            </a>
        </div>
    </div>`
  );
});
