<template>
  <div class="p-4 xl:p-8 bg-black/30 rounded-2xl">
    <div class="w-full flex justify-center">
      <button
        class="button-container bg-gradient-to-r from-[var(--color-orange-base)] to-[var(--color-yellow-base)] hover:bg-gradient-to-r hover:from-[var(--color-yellow-base)] hover:to-[var(--color-orange-base)]"
      >
        <div class="b-m-container">
          <div class="b-m-text">{{ $t('HOME.TITLE', { name: WebName.WEB_NAME }) }}</div>
          <div class="b-m-icon">
            <svg viewBox="0 0 24 24" height="100%" width="100%">
              <path
                d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 19.091V4.909z"
              ></path>
            </svg>
          </div>
        </div>
      </button>
    </div>
    <h1 class="flex flex-col text-center my-3 md:my-6 text-2xl md:text-5xl font-extrabold text-[var(--color-white)]">
      <div>{{ $t('HOME.MORE') }} <span class="text-[var(--color-orange-base)]">1000+</span> {{ $t('HOME.TEMPLATE_WEBSITE') }}</div>
      <div>{{ $t('HOME.PROFESSIONAL') }} <span class="text-[var(--color-blue-base)]">{{ $t('HOME.MULTIPLE_DOMAINS') }}</span></div>
    </h1>

    <div class="flex justify-center items-center">
      <!-- From Uiverse.io by marcelodolza -->
      <button class="button">
        <div class="outline"></div>
        <div class="state state--default">
          <div class="icon"></div>
          <p>
            <span style="--i: 0">V</span>
            <span style="--i: 1">i</span>
            <span style="--i: 2">e</span>
            <span style="--i: 3">w</span>
            <span style="--i: 4">T</span>
            <span style="--i: 5">e</span>
            <span style="--i: 6">m</span>
            <span style="--i: 7">p</span>
            <span style="--i: 8">l</span>
            <span style="--i: 9">a</span>
            <span style="--i: 10">t</span>
            <span style="--i: 11">e</span>
          </p>
        </div>
        <div class="state state--sent">
          <p>
            <span style="--i: 5">V</span>
            <span style="--i: 6">i</span>
            <span style="--i: 7">e</span>
            <span style="--i: 8">w</span>
          </p>
        </div>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { WebName } from '@/constants';

defineOptions({
  name: 'InformationComponent',
})
</script>

<style scoped>
/* From Uiverse.io by Amanfrom2005 */
.button-container {
  cursor: pointer;
  border: none;
  padding: 13px 30px 13px;
  clip-path: polygon(
    0% 0%,
    64% 0%,
    64% 10%,
    70% 10%,
    75% 1%,
    100% 0%,
    100% 80%,
    95% 100%,
    42% 100%,
    42% 90%,
    34% 90%,
    34% 100%,
    5% 100%,
    0% 80%
  );
  transition: all 0.3s ease-in-out;
}
.b-m-container {
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-mask-image: linear-gradient(-75deg, rgb(0 0 0) 30%, #000 50%, rgba(0, 0, 0, 0.2) 70%);
  -webkit-mask-size: 200%;
  animation: shine 2s infinite;
  transition: 0.35s;
}
@keyframes shine {
  0% {
    -webkit-mask-position: 160%;
  }
  100% {
    -webkit-mask-position: -50%;
  }
}
.b-m-text {
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
  font-weight: 100;
  margin-right: 10px;
  font-family: 'Franklin Gothic Medium', sans-serif;
}

.b-m-icon {
  width: 14px;
  height: 14px;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}
.b-m-icon svg {
  fill: #fff;
}

/* From Uiverse.io by marcelodolza */
.button {
  --primary: #ff5569;
  --neutral-1: #f7f8f7;
  --neutral-2: #e7e7e7;
  --radius: 14px;

  cursor: pointer;
  border-radius: var(--radius);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow:
    0 0.5px 0.5px 1px rgba(255, 255, 255, 0.2),
    0 10px 20px rgba(0, 0, 0, 0.2),
    0 4px 5px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  min-width: 200px;
  padding: 20px;
  height: 68px;
  font-family: 'Galano Grotesque', Poppins, Montserrat, sans-serif;
  font-style: normal;
  font-size: 18px;
  font-weight: 600;
}
.button:hover {
  transform: scale(1.02);
  box-shadow:
    0 0 1px 2px rgba(255, 255, 255, 0.3),
    0 15px 30px rgba(0, 0, 0, 0.3),
    0 10px 3px -3px rgba(0, 0, 0, 0.04);
}
.button:active {
  transform: scale(1);
  box-shadow:
    0 0 1px 2px rgba(255, 255, 255, 0.3),
    0 10px 3px -3px rgba(0, 0, 0, 0.2);
}
.button:after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius);
  border: 2.5px solid transparent;
  background:
    linear-gradient(var(--neutral-1), var(--neutral-2)) padding-box,
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.45)) border-box;
  z-index: 0;
  transition: all 0.4s ease;
}
.button:hover::after {
  transform: scale(1.05, 1.1);
  box-shadow: inset 0 -1px 3px 0 rgba(255, 255, 255, 1);
}
.button::before {
  content: '';
  inset: 7px 6px 6px 6px;
  position: absolute;
  background: linear-gradient(to top, var(--neutral-1), var(--neutral-2));
  border-radius: 30px;
  filter: blur(0.5px);
  z-index: 2;
}
.state p {
  display: flex;
  align-items: center;
  justify-content: center;
}
.state .icon {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform: scale(1.25);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Outline */
.outline {
  position: absolute;
  border-radius: inherit;
  overflow: hidden;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s ease;
  inset: -2px -3.5px;
}
.outline::before {
  content: '';
  position: absolute;
  inset: -100%;
  background: conic-gradient(from 180deg, transparent 60%, white 80%, transparent 100%);
  animation: spin 2s linear infinite;
  animation-play-state: paused;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.button:hover .outline {
  opacity: 1;
}
.button:hover .outline::before {
  animation-play-state: running;
}

/* Letters */
.state p span {
  display: block;
  opacity: 0;
  animation: slideDown 0.8s ease forwards calc(var(--i) * 0.03s);
}
.button:hover p span {
  opacity: 1;
  animation: wave 0.5s ease forwards calc(var(--i) * 0.02s);
}
.button:focus p span {
  opacity: 1;
  animation: disapear 0.6s ease forwards calc(var(--i) * 0.03s);
}
@keyframes wave {
  30% {
    opacity: 1;
    transform: translateY(4px) translateX(0) rotate(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-3px) translateX(0) rotate(0);
    color: var(--primary);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0);
  }
}
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px) translateX(5px) rotate(-90deg);
    color: var(--primary);
    filter: blur(5px);
  }
  30% {
    opacity: 1;
    transform: translateY(4px) translateX(0) rotate(0);
    filter: blur(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-3px) translateX(0) rotate(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0);
  }
}
@keyframes disapear {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateX(5px) translateY(20px);
    color: var(--primary);
    filter: blur(5px);
  }
}
.button:hover .state--default .icon {
  transform: rotate(45deg) scale(1.25);
}
.button:focus .state--default svg {
  animation: takeOff 0.8s linear forwards;
}
.button:focus .state--default .icon {
  transform: rotate(0) scale(1.25);
}
@keyframes takeOff {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 1;
    transform: translateX(70px) rotate(45deg) scale(2);
  }
  100% {
    opacity: 0;
    transform: translateX(160px) rotate(45deg) scale(0);
  }
}
@keyframes land {
  0% {
    transform: translateX(-60px) translateY(30px) rotate(-50deg) scale(2);
    opacity: 0;
    filter: blur(3px);
  }
  100% {
    transform: translateX(0) translateY(0) rotate(0);
    opacity: 1;
    filter: blur(0);
  }
}

/* Contrail */
.state--default .icon:before {
  content: '';
  position: absolute;
  top: 50%;
  height: 2px;
  width: 0;
  left: -5px;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));
}
.button:focus .state--default .icon:before {
  animation: contrail 0.8s linear forwards;
}
@keyframes contrail {
  0% {
    width: 0;
    opacity: 1;
  }
  8% {
    width: 15px;
  }
  60% {
    opacity: 0.7;
    width: 80px;
  }
  100% {
    opacity: 0;
    width: 160px;
  }
}

/* States */
.state {
  z-index: 2;
  display: flex;
  position: relative;
}
.state--default span:nth-child(4) {
  margin-right: 5px;
}
.state--sent {
  display: none;
}
.button:focus .state--default {
  position: absolute;
}
.button:focus .state--sent {
  display: flex;
}
.button:focus .state--sent span {
  opacity: 0;
  animation: slideDown 0.8s ease forwards calc(var(--i) * 0.2s);
}
.button:focus .state--sent .icon svg {
  opacity: 0;
  animation: appear 1.2s ease forwards 0.8s;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(4) rotate(-40deg);
    color: var(--primary);
    filter: blur(4px);
  }
  30% {
    opacity: 1;
    transform: scale(0.6);
    filter: blur(1px);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
