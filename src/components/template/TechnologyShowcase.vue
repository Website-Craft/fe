<template>
  <div class="technology-showcase bg-[var(--color-dark-blue)]/90 text-[var(--color-white)] rounded-2xl shadow-lg py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-color-gold-base">
        Công nghệ chúng tôi sử dụng
      </h2>
      <p class="mt-6 text-xl text-[var(--color-beige-base)] max-w-3xl mx-auto">
        Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi tự tin mang đến các giải pháp công nghệ tiên tiến nhất, đáp ứng mọi yêu cầu của bạn.
      </p>

      <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="tech in technologies" :key="tech.name" class="pt-6 bg-[var(--color-coban-base)] transform transition duration-400 rounded-lg shadow-md hover:scale-105 hover:shadow-lg">
          <div class="flow-root rounded-lg px-6 pb-8">
              <div>
                <span class="inline-flex items-center justify-center p-3 bg-[var(--color-orange-base)] rounded-full shadow-lg">
                  <i :class="tech.icon" class="pi text-2xl text-[var(--color-white)]"></i>
                </span>
              </div>
              <h3 class="mt-8 text-lg font-medium tracking-tight text-[var(--color-white)]">{{ tech.name }}</h3>
              <p class="mt-5 text-base text-[var(--color-white)]">
                {{ tech.description }}
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const technologies = ref([
  {
    name: 'Vue.js',
    description: 'Framework JavaScript lũy tiến để xây dựng giao diện người dùng mạnh mẽ.',
    icon: 'pi-verified pi-spin'
  },
  {
    name: 'React.js',
    description: 'Thư viện JavaScript để xây dựng giao diện người dùng dựa trên component.',
    icon: 'pi-slack pi-spin'
  },
  {
    name: 'Node.js',
    description: 'Môi trường runtime JavaScript phía máy chủ mạnh mẽ để xây dựng các ứng dụng mạng.',
    icon: 'pi-server pi-spin'
  },
  {
    name: 'Angular',
    description: 'Nền tảng phát triển ứng dụng di động và web hiệu suất cao.',
    icon: 'pi-cog pi-spin'
  },
  {
    name: 'C#',
    description: 'Ngôn ngữ lập trình đa năng, hiện đại do Microsoft phát triển.',
    icon: 'pi-microsoft pi-spin'
  },
  {
    name: 'PHP',
    description: 'Ngôn ngữ kịch bản phía máy chủ phổ biến để phát triển web.',
    icon: 'pi-code pi-spin'
  },
  {
    name: 'Python',
    description: 'Ngôn ngữ lập trình mạnh mẽ và linh hoạt cho nhiều ứng dụng.',
    icon: 'pi-microchip-ai pi-spin'
  },
  {
    name: 'Java',
    description: 'Nền tảng lập trình hướng đối tượng, đa nền tảng và bảo mật.',
    icon: 'pi-database pi-spin'
  },
]);

// Bạn có thể thêm các hiệu ứng GSAP tại đây nếu muốn, ví dụ:
// import { onMounted } from 'vue';
// import gsap from 'gsap';

// onMounted(() => {
//   gsap.from('.flow-root', { duration: 1, y: 50, opacity: 0, stagger: 0.2 });
// });
</script>

<style scoped>
/* Các style tùy chỉnh nếu cần */
</style>

