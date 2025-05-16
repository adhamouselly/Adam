let nightCount = 0;
let isNight = false;

function toggleLight() {
  if (!isNight && nightCount < 2) {
    isNight = true;
    nightCount++;

    document.body.classList.add("night");

    setTimeout(() => {
      // تشغيل الضوء من الدب
      document.body.classList.remove("night");
      isNight = false;

      // فتح الباب
      document.getElementById("doorSide").classList.add("open");

      // إظهار الدب
      const bear = document.getElementById("bear");
      bear.classList.add("active");

      // عرض الرسالة
      const msgBox = document.getElementById("bearMsg");
      msgBox.textContent = nightCount === 1
        ? "لك خلي الضو مضوي يا زلمه"
        : "عم قلك خليه مضوي";
      msgBox.classList.add("show");

      // بعد 3 ثواني إخفاء كلشي
      setTimeout(() => {
        bear.classList.remove("active");
        msgBox.classList.remove("show");
        document.getElementById("doorSide").classList.remove("open");
      }, 3000);

    }, 1500);
  }
}