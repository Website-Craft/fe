<template>
  <div class="container mx-auto px-4 py-12 space-y-12">
    <!-- Hero Section -->
    <section class="text-center mb-12">
      <h1 class="text-5xl font-extrabold text-primary-500 mb-6 animate-fade-in-down">Kiến tạo giải pháp số hoàn hảo cùng chúng tôi!</h1>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
        Chào mừng bạn đến với My App, nơi mọi ý tưởng về website và ứng dụng di động đều được hiện thực hóa một cách chỉnh chu và chuyên nghiệp nhất. Chúng tôi tự hào là đội ngũ tiên phong trong việc cung cấp các giải pháp phát triển website và ứng dụng theo yêu cầu, từ những template hiện đại đến các sản phẩm tùy chỉnh phức tạp, áp dụng mọi công nghệ tiên tiến nhất để đảm bảo chất lượng vượt trội và sự hài lòng tuyệt đối.
      </p>
      <div class="mt-8">
        <img :src="AboutImg1" alt="Our Team Working" class="w-full max-w-4xl mx-auto rounded-xl shadow-2xl object-cover transform transition-transform duration-500 hover:scale-105" style="max-height: 500px;" />
      </div>
    </section>

    <!-- Our Mission Section -->
    <section class="flex flex-col md:flex-row items-center gap-12 py-12 bg-blue-50 rounded-2xl shadow-inner px-8">
      <div class="md:w-1/2">
        <h2 class="text-4xl font-bold text-gray-800 mb-6">Sứ mệnh của chúng tôi: Biến mọi ý tưởng thành sản phẩm số đẳng cấp</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Sứ mệnh của My App là đồng hành cùng bạn trên mọi nẻo đường số hóa, từ việc cung cấp các template website độc đáo, sẵn sàng sử dụng, đến việc phát triển website và ứng dụng di động hoàn toàn theo yêu cầu. Với đội ngũ chuyên gia giàu kinh nghiệm và khả năng áp dụng linh hoạt mọi công nghệ hiện có, chúng tôi cam kết mang đến những sản phẩm không chỉ đáp ứng mà còn vượt xa mong đợi của bạn, bao gồm cả hỗ trợ triển khai (deploy) để sản phẩm của bạn nhanh chóng đi vào hoạt động.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Chúng tôi không ngừng nghiên cứu, học hỏi và áp dụng những công nghệ mới nhất để đảm bảo mọi dự án đều đạt được hiệu suất tối ưu, bảo mật cao và trải nghiệm người dùng mượt mà. Mục tiêu là xây dựng mối quan hệ đối tác bền vững, cùng nhau kiến tạo nên những thành công vang dội trên nền tảng số.
        </p>
      </div>
      <div class="md:w-1/2">
        <img :src="AboutImg2" alt="Mission Vision" class="w-full rounded-xl shadow-xl object-cover transform transition-transform duration-500 hover:rotate-3" style="max-height: 400px;" />
      </div>
    </section>

    <!-- Our Values Section -->
    <section class="py-12">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-10">Giá trị cốt lõi: Nền tảng của mọi thành công</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <i class="pi pi-palette text-5xl text-blue-500 mb-4 block text-center"></i>
          <h3 class="text-2xl font-semibold text-gray-800 mb-3 text-center">Sáng tạo & Độc đáo</h3>
          <p class="text-gray-600 text-center">Mỗi sản phẩm là một tác phẩm nghệ thuật, từ ý tưởng ban đầu đến thiết kế và triển khai, luôn tìm kiếm sự khác biệt và dẫn đầu xu hướng.</p>
        </div>
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <i class="pi pi-cog text-5xl text-green-500 mb-4 block text-center"></i>
          <h3 class="text-2xl font-semibold text-gray-800 mb-3 text-center">Công nghệ & Chuyên môn</h3>
          <p class="text-gray-600 text-center">Áp dụng mọi công nghệ tiên tiến nhất với đội ngũ chuyên gia hàng đầu, đảm bảo giải pháp tối ưu và hiệu quả vượt trội.</p>
        </div>
        <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
          <i class="pi pi-handshake text-5xl text-purple-500 mb-4 block text-center"></i>
          <h3 class="text-2xl font-semibold text-gray-800 mb-3 text-center">Tận tâm & Đồng hành</h3>
          <p class="text-gray-600 text-center">Chúng tôi luôn lắng nghe, thấu hiểu và đồng hành cùng khách hàng từ A đến Z, kể cả hỗ trợ triển khai và bảo trì.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="flex flex-col md:flex-row-reverse items-center gap-12 py-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-inner px-8">
      <div class="md:w-1/2">
        <h2 class="text-4xl font-bold text-gray-800 mb-6">My App: Đối tác số hóa tin cậy của bạn</h2>
        <ul class="list-none space-y-4">
          <li class="flex items-start text-gray-700">
            <i class="pi pi-desktop text-yellow-500 mr-3 mt-1 text-xl flex-shrink-0"></i>
            <div>
              <h3 class="font-semibold text-xl mb-1">Phát triển Website & App theo yêu cầu</h3>
              <p>Biến mọi ý tưởng thành hiện thực với giải pháp tùy chỉnh, đáp ứng mọi yêu cầu cụ thể của bạn trên đa dạng nền tảng.</p>
            </div>
          </li>
          <li class="flex items-start text-gray-700">
            <i class="pi pi-cloud-upload text-blue-500 mr-3 mt-1 text-xl flex-shrink-0"></i>
            <div>
              <h3 class="font-semibold text-xl mb-1">Hỗ trợ triển khai (Deployment) toàn diện</h3>
              <p>Đảm bảo sản phẩm của bạn hoạt động trơn tru trên môi trường thực tế với dịch vụ hỗ trợ deploy chuyên nghiệp.</p>
            </div>
          </li>
          <li class="flex items-start text-gray-700">
            <i class="pi pi-star-fill text-green-500 mr-3 mt-1 text-xl flex-shrink-0"></i>
            <div>
              <h3 class="font-semibold text-xl mb-1">Chất lượng và Công nghệ vượt trội</h3>
              <p>Áp dụng những công nghệ mới nhất và quy trình phát triển khắt khe, mang đến sản phẩm tối ưu về hiệu suất và bảo mật.</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="md:w-1/2">
        <img :src="AboutImg3" alt="Why Choose Us" class="w-full rounded-xl shadow-xl object-cover transform transition-transform duration-500 hover:scale-105" style="max-height: 400px;" />
      </div>
    </section>

    <!-- Contact & Call to Action -->
    <section class="text-center py-12 bg-gray-500 text-white rounded-2xl shadow-2xl">
      <h2 class="text-4xl font-bold mb-6">Sẵn sàng kiến tạo nên sản phẩm số của riêng bạn?</h2>
      <p class="text-lg max-w-2xl mx-auto mb-8">
        Chúng tôi nhận mọi yêu cầu phát triển website và ứng dụng. Để được tư vấn chi tiết và biến ý tưởng thành hiện thực, vui lòng liên hệ với chúng tôi ngay hôm nay!
      </p>
      <div class="space-y-4 md:space-y-0 md:flex md:justify-center md:gap-8">
        <a href="tel:0828477808" class="px-6 py-3 bg-[var(--color-beige-base)] hover:bg-[var(--color-gold-base)] text-black font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 block md:inline-block">
          <i class="pi pi-phone mr-2"></i>Gọi ngay: 0828.477.808
        </a>
        <a href="https://zalo.me/0828477808" target="_blank" class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 block md:inline-block">
          <i class="pi pi-comment mr-2"></i>Zalo: 0828.477.808
        </a>
        <a href="https://www.facebook.com/vovanviet1998" target="_blank" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 block md:inline-block">
          <i class="pi pi-facebook mr-2"></i>Facebook
        </a>
        <a href="mailto:tuandtdeveloper@gmail.com" class="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 block md:inline-block">
          <i class="pi pi-envelope mr-2"></i>Email
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AboutImg1 from '@/assets/images/about/team-working.webp'; // Placeholder, replace with actual path
import AboutImg2 from '@/assets/images/about/mission-vision.jpg'; // Placeholder, replace with actual path
import AboutImg3 from '@/assets/images/about/why-choose-us.jpg'; // Placeholder, replace with actual path

defineOptions({
  name: 'AboutPage',
});
</script>

<style scoped>
/* Custom animations if desired, otherwise PrimeFlex/Tailwind CSS handles most styling */
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>