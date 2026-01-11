<template>
  <div
    class="website-introduction mt-8 rounded-md bg-[var(--color-beige-base)] text-[var(--color-black)] pt-16 pb-8 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mx-auto text-center">
      <h2
        class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-[var(--color-orange-base)]"
      >
        Chào mừng đến với bộ sưu tập các dự án web của chúng tôi
      </h2>
      <p class="mt-6 text-xl text-color-black max-w-3xl mx-auto">
        Chúng tôi tự hào giới thiệu những dự án web đã hoàn thành, thể hiện sự sáng tạo, đổi mới và
        chuyên nghiệp trong từng chi tiết. Khám phá các trang web được thiết kế để mang lại trải
        nghiệm người dùng tuyệt vời và hiệu quả kinh doanh tối ưu.
      </p>
      <div class="mt-10 min-h-[70px]">
        <button>
          Xem dự án
          <div id="clip">
            <div id="leftTop" class="corner"></div>
            <div id="rightBottom" class="corner"></div>
            <div id="rightTop" class="corner"></div>
            <div id="leftBottom" class="corner"></div>
          </div>
          <span id="rightArrow" class="arrow"></span>
          <span id="leftArrow" class="arrow"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Logic cho WebsiteIntroduction nếu cần
</script>

<style scoped>
/* From Uiverse.io by Navarog21 */
button {
  position: relative;
  width: 11em;
  height: 4em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  color: #FF6D1F;
}

button:hover {
  color: red;
  font-size: 15px;
  transition: 0.3s ease-in;
}

#clip {
  --color: ##195480;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 5px double var(--color);
  box-shadow: inset 0px 0px 15px #195480;
  -webkit-clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
}

.arrow {
  position: absolute;
  transition: 0.2s;
  background-color: #2761c3;
  top: 35%;
  width: 11%;
  height: 30%;
}

#leftArrow {
  left: -13.5%;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

#rightArrow {
  -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
  left: 102%;
}

button:hover #rightArrow {
  background-color: #27c39f;
  left: -15%;
  animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

button:hover #leftArrow {
  background-color: #27c39f;
  left: 103%;
  animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.corner {
  position: absolute;
  width: 4em;
  height: 4em;
  background-color: #2761c3;
  box-shadow: inset 1px 1px 8px #2781c3;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
}

#rightTop {
  top: -1.98em;
  left: 91%;
}

#leftTop {
  top: -1.96em;
  left: -3em;
}

#leftBottom {
  top: 2.1em;
  left: -2.15em;
}

#rightBottom {
  top: 45%;
  left: 88%;
}

button:hover #leftTop {
  animation:
    0.1s ease-in-out 0.05s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #rightTop {
  animation:
    0.1s ease-in-out 0.15s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #rightBottom {
  animation:
    0.1s ease-in-out 0.25s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover #leftBottom {
  animation:
    0.1s ease-in-out 0.35s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
}

button:hover .corner {
  transform: scale(1.25) rotate(45deg);
}

button:hover #clip {
  animation: 0.2s ease-in-out 0.55s both greenLight8;
  --color: #27c39f;
}

@keyframes changeColor8 {
  from {
    background-color: #2781c3;
  }

  to {
    background-color: #27c39f;
  }
}

@keyframes lightEffect8 {
  from {
    box-shadow: 1px 1px 5px #27c39f;
  }

  to {
    box-shadow: 0 0 2px #27c39f;
  }
}

@keyframes greenLight8 {
  from {
  }

  to {
    box-shadow: inset 0px 0px 32px #27c39f;
  }
}

@keyframes leftArrow8 {
  from {
    transform: translate(0px);
  }

  to {
    transform: translateX(10px);
  }
}

@keyframes rightArrow8 {
  from {
    transform: translate(0px);
  }

  to {
    transform: translateX(-10px);
  }
}
</style>
