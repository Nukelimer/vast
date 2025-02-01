<script>
    import { onMount } from 'svelte';
    import VanishingHeader from './VanishingHeader.svelte';
    import { ChevronRight, X } from 'lucide-svelte';



    let navLinks = [
    { name: 'Haven-1', url: '/haven-1' },
    { name: 'Haven-2', url: '/haven-2' },
    { name: 'Roadmap', url: '/roadmap' },
    { name: 'Updates', url: '/updates' }
  ];

  let additionalLinks = [
    { name: 'Haven-1 Lab', url: '/haven-1-lab' },
    { name: 'Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' }
  ];
    let scrollY = 0;
    let bgColor = 'transparent';
    let bg_Color = 'white';
    let lg_Bg_Color = 'white';
    let text_White = 'black';
    let invertColor = 'filter invert';
    let isHovered = false;
    let timeoutId;
    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
    };

    $:console.log(isOpen);
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleMenu();
        }
    };

    const handleScroll = () => {
        scrollY = window.scrollY;
        bgColor = scrollY > 100 ? 'white' : 'transparent';
        bg_Color = scrollY > 100 ? 'black' : 'white';
        lg_Bg_Color = scrollY > 100 ? 'black' : 'white';
        invertColor = scrollY > 100 ? '' : 'filter invert';
        text_White = scrollY > 100 ? 'white' : '';
    };

    // Disable scrolling when isOpen is true
    $: if (typeof window !== 'undefined') {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = ''; // Reset on unmount
        };
    });

    const navData = [
        { name: 'Haven-1', url: '/haven-1' },
        { name: 'Haven-2', url: '/haven-2' },
        { name: 'Roadmap', url: '/roadmap' },
        { name: 'About Us', url: '/about-us' }
    ];

    const dropdownData = [
        { url: '/team', name: 'Team' },
        { url: '/contact', name: 'Contact' },
        { url: '/updates', name: 'Updates' },
        { url: '/careers', name: 'Careers' }
    ];
</script>

<VanishingHeader>
    <nav
        class="flex z-50 max-h-[3.75rem] top-12 justify-between md:items-center w-full px-6 py-4 overflow-hidden"
        style="background-color: {bgColor}"
    >
        <a href="/">
            <img src="/images/logo_vast.svg" alt="logo" class={invertColor} />
        </a>

        <div
            class="relative lg:hidden w-8 h-6 cursor-pointer flex flex-col justify-center items-center"
            on:click={toggleMenu}
            on:keydown={handleKeyDown}
            tabindex="0"
            role="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
        >
            <span
                class="block w-full h-[1px] translate-y-[1px] bg-gray-800 rounded transition-transform duration-300 ease-in-out"
                class:rotate-45={isOpen}
                class:translate-y-[7px]={!isOpen}
                style="background-color: {bg_Color}"
            ></span>
            <span
                class="block w-full h-[1px] bg-gray-800 rounded transition-transform duration-300 ease-in-out"
                class:-rotate-45={isOpen}
                class:-translate-y-[7px]={!isOpen}
                style="background-color: {bg_Color}"
            ></span>
        </div>

        <div class="hidden lg:flex justify-evenly w-full">
            {#each navData as data}
                <a
                    href={data.url}
                    class="relative group text-{lg_Bg_Color} py-2 px-4 overflow-hidden"
                    on:mouseenter={() => (isHovered = data.name === 'About Us')}
                >
                    <span
                        class="absolute inset-0 bg-gradient-to-t from-white to-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-linear"
                    ></span>
                    <span class="relative z-10 group-hover:text-black">{data.name}</span>
                </a>
            {/each}
        </div>

        <a href="/create-your-mission" class="hidden lg:flex"
            ><button
                style="background-color: {bg_Color}"
                class="bg-white text-nowrap py-2 px-6 text-{text_White}"
            >
                Create your mission
            </button></a
        >
    </nav>
</VanishingHeader>

{#if isHovered}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="md:block hidden fixed top-16 z-50 w-3/4 right-24 transition-transform duration-500 ease-in-out transform"
        class:animate-slide-down={isHovered}
        class:animate-slide-up={!isHovered}
        on:mouseleave={() => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                isHovered = false;
            }, 500);
        }}
        on:mouseenter={() => {
            clearTimeout(timeoutId);
            isHovered = true;
        }}
    >
        <div class="flex justify-around h-full min-h-72">
            {#each dropdownData as data}
                <a
                    href={data.url}
                    class="border-r min-h-72 pt-28 bg-gradient-to-b from-white to-zinc-300 flex flex-col h-full justify-center items-center border-zinc-300 w-full group relative overflow-hidden transition-all duration-1000 hover:from-zinc-300 hover:to-white"
                >
                    <span class="font-bold text-xl mb-4">{data.name}</span>
                    <span class="relative border p-1 overflow-hidden">
                        <span
                            class="absolute inset-0 bg-gradient-to-l from-black to-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-linear"
                        ></span>
                        <ChevronRight
                            class="relative z-10"
                            size="20"
                            color={`${isHovered ? 'red' : 'black'}`}
                        />
                    </span>
                </a>
            {/each}
        </div>
    </div>
{/if}

{#if isOpen}
    <div class="h-[calc(100vh)] lg:hidden my-auto flex flex-col  fixed bottom -0 w-screen overflow-hidden bg-white !z-[5000]">
    

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="px-6 mt-6 h-full flex flex-col" on:click={toggleMenu}>
 <nav class="flex flex-col text-5xl gap-8 font-semibold ">
    {#each navLinks as link}
      {#if link.name === 'Haven-1'}
       <div class="flex  items-center justify-between">
         <a href={link.url} class="hover:underline text-gray-700">{link.name} </a>
         <span class="text-gray-700"  on:click|stopPropagation={toggleMenu}
           
            tabindex="0"
            role="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}><X size='40' /> </span>
       </div>
      {:else}
        <a href={link.url} class="hover:underline text-gray-700">{link.name}</a>
      {/if}
    {/each}
  </nav>
  <div class="mt-10 flex flex-col gap-8 text-xl font-semibold">
    {#each additionalLinks as link}
      <a href={link.url} class="hover:underline text-gray-700">{link.name}</a>
    {/each}
  </div>
		

   <button class=" my-auto  bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-800">
    Create your mission
  </button>
	</div>
    </div>
{/if}

<style>
    .animate-slide-down {
        transform: translateY(-100%);
        animation: slide-down 0.5s forwards ease-in-out;
    }

    .animate-slide-up {
        transform: translateY(0);
        animation: slide-up 0.5s forwards ease-in-out;
    }

    @keyframes slide-down {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-up {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100%);
        }
    }
</style>
