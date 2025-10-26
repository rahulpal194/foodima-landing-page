<template>
    <!--===============================
           HERO PART START 
     =================================-->
     <ActionComponent class="pt-26 lg:pt-40 !mb-8 !sm:mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="flex flex-col items-center lg:items-start justify-center">
                <h2 class="heading mb-4">
                    Recent
                    <span class="gradient-text"> News </span>
                    &
                    <span class="gradient-text"> Article</span>
                    </h2>
                <p class="text-base font-normal lg:text-start text-center">We recommended you to subscribe to our newsletter, drop your email below in footer to get daily update about us.</p>
            </div>
            <NuxtImg class="max-w-[407px] w-full ml-auto lg:block hidden" src="/images/blog/banner.png"/>
        </div>
     </ActionComponent>
     <!--==============================
           HERO PART END 
     =================================-->

    <!--===============================
             BLOGS PART START 
     =================================-->
     <section class="mb-20 sm:mb-40">
        <div class="container">
            <div class="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-x-6">
                <div ref="dropdownContainer" id="filter-menu" class="relative max-lg:w-full max-lg:max-w-[350px] mb-6 sm:mb-0 ">
                    <button @click="isOpen= !isOpen" class="flex lg:hidden items-center justify-between gap-2 w-full h-12 px-6 rounded-full shadow-input bg-white">
                        <span class="text-base font-medium capitalize text-heading">{{ activeCategory }}</span>
                        <i :class="isOpen? 'rotate-180':'rotate-0'" class="icon-chevron-down text-xl text-heading transition-all duration-300"></i>
                    </button>
                    <nav :class="isOpen ? 'max-lg:scale-y-100' : 'max-lg:scale-y-0'" class="flex flex-col lg:flex-row items-start lg:items-center origin-top transition-all duration-300 max-lg:absolute max-lg:top-12 max-lg:left-0 max-lg:z-10 max-lg:p-2 max-lg:w-full max-lg:shadow-paper max-lg:rounded-xl max-lg:bg-white">
                        <button
                            v-for="category in categories" 
                            type="button" 
                            @click="activeCategory=category"
                            :class="activeCategory == category ? 'bg-primary text-white shadow-gradient-button':'' "
                            class="h-10 w-full lg:w-fit px-4 lg:px-6 rounded-3xl text-base text-left lg:text-center font-medium capitalize cursor-pointer transition-all duration-300">
                            {{ category }}
                        </button>
                    </nav>
                </div>
                <form action="" class="max-w-[350px] w-full bg-white p-1 shadow-input rounded-full flex">
                    <input type="text" name="search" id="search" placeholder="Search blogs name" class="flex-1 outline-none px-6">
                    <button type="submit" class="w-10 h-10 rounded-full !p-0 primary-button shadow-none"><i class="icon-magnify-search text-white"></i> </button>
                </form>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-y-8 lg:gap-x-9.5 mb-12">
                <div v-for="blog in blogs" class="bg-white shadow-blog rounded-2xl flex flex-col hover:shadow-card">
                    <div class="w-full h-47">
                        <NuxtImg :src="blog.coverimage" class="w-full h-full object-cover rounded-t-2xl" alt="blogcover" />
                    </div>
                    <h6 class="mb-6 flex-grow line-clamp-2 px-6 pt-6 text-lg font-bold leading-7">{{ blog.title }}</h6>
                    <div class="flex justify-between gap-x-6 gap-y-3 px-6 pb-6 flex-wrap lg:flex-nowrap">
                        <span class="text-lg font-medium leading-tight">{{ blog.date }}</span>
                        <NuxtLink :to="`/blog/${blog.id}`" @click="blogDetails.setblog(blog)" class="text-primary font-medium text-lg leading-tight">Read more</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="flex gap-8 justify-end">
                <div class="w-12 h-12 rounded-full bg-[#FFE4E1] hover:text-white hover:bg-linear-270 from-primary to-secondary flex items-center justify-center">
                    <i class="icon-left"></i>
                </div>
                <div class="w-12 h-12 rounded-full bg-[#FFE4E1] hover:text-white hover:bg-linear-270 from-primary to-secondary flex items-center justify-center">
                    <i class="icon-right"></i>
                </div>
            </div>
        </div>
     </section>
    <!--===============================
             BLOGS PART START 
     =================================-->
</template>
<script setup>

    import blogs from '@/assets/json/blogs.json';
    import { useBlogStore } from '@/stores/blog';
    import { useClickOutside } from '~/composable/clickOutside';
    const categories = ref(['All', 'Recent', 'News', 'Article', 'Comparison'])
    const activeCategory = ref("All")

    const blogDetails = useBlogStore()
    const { dropdownContainer , isOpen } = useClickOutside()

</script>