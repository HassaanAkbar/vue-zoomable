<template>
    <div id="v-zoomable-control-btns" class="controll__buttons" @dblclick.stop="" @mousedown.stop="">
        <ul class="controll">
            <li class="controll__item controll__item--circle">
                <ul class="controll__pan controll__item--circle__inner">
                    <li class="controll__pan__up controll__item--circle__inner__up">
                        <a @pointerdown="ev => onButtonDown(ev, 'pan-up')" @pointerup="ev => onButtonUp(ev, 'pan-up')"
                            @pointercancel="ev => onButtonUp(ev, 'pan-up')"
                            @pointerleave="ev => onButtonUp(ev, 'pan-up')" @contextmenu.prevent="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-up">
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                        </a>
                    </li>
                    <li class="controll__pan__right controll__item--circle__inner__right">
                        <a @pointerdown="ev => onButtonDown(ev, 'pan-right')"
                            @pointerup="ev => onButtonUp(ev, 'pan-right')"
                            @pointercancel="ev => onButtonUp(ev, 'pan-right')"
                            @pointerleave="ev => onButtonUp(ev, 'pan-right')" @contextmenu.prevent="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                    </li>
                    <li class="controll__pan__down controll__item--circle__inner__down">
                        <a @pointerdown="ev => onButtonDown(ev, 'pan-down')"
                            @pointerup="ev => onButtonUp(ev, 'pan-down')"
                            @pointercancel="ev => onButtonUp(ev, 'pan-down')"
                            @pointerleave="ev => onButtonUp(ev, 'pan-down')" @contextmenu.prevent="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-down">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg></a>
                    </li>
                    <li class="controll__pan__left controll__item--circle__inner__left">
                        <a @pointerdown="ev => onButtonDown(ev, 'pan-left')"
                            @pointercancel="ev => onButtonUp(ev, 'pan-left')"
                            @pointerup="ev => onButtonUp(ev, 'pan-left')"
                            @pointerleave="ev => onButtonUp(ev, 'pan-left')" @contextmenu.prevent="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-left">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="controll__home controll__item controll__item--list-item">
                <a @pointerdown="ev => onButtonDown(ev, 'home')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-minimize-2">
                        <polyline points="4 14 10 14 10 20"></polyline>
                        <polyline points="20 10 14 10 14 4"></polyline>
                        <line x1="14" y1="10" x2="21" y2="3"></line>
                        <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                </a>
            </li>
            <li class="controll__zoom-in controll__item controll__item--list-item">
                <a @pointerdown="ev => onButtonDown(ev, 'zoom-in')" @pointerup="ev => onButtonUp(ev, 'zoom-in')"
                    @pointercancel="ev => onButtonUp(ev, 'zoom-in')" @pointerleave="ev => onButtonUp(ev, 'zoom-in')"
                    @contextmenu.prevent="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-zoom-in">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                </a>
            </li>
            <li class="controll__zoom-in controll__item controll__item--list-item">
                <a @pointerdown="ev => onButtonDown(ev, 'zoom-out')" @pointerup="ev => onButtonUp(ev, 'zoom-out')"
                    @pointercancel="ev => onButtonUp(ev, 'zoom-out')" @pointerleave="ev => onButtonUp(ev, 'zoom-out')"
                    @contextmenu.prevent="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-zoom-out">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits([
    // "pandown", "panup", "zoomdown", "zoomup", "home", 
    "buttondown", "buttonup"]);

// function onButtonDown(event: PointerEvent, button: string) {
//     // emit("pandown", button);
//     emit("buttondown", {
//         key: button,
//     });
// }

// function onButtonUp(event: PointerEvent, button: string) {
//     emit("buttonup", {
//         key: button,
//     });
// }

function onButtonDown(event: PointerEvent, button: string) {
    emit("buttondown", {
        key: button,
    });
}

function onButtonUp(event: PointerEvent, button: string) {
    emit("buttonup", {
        key: button,
    });
}

</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}

a {
    cursor: pointer;
    color: #868e96;

    transition: color .15s ease;
}

a:hover {
    color: #555b61;
}


.controll__buttons {
    z-index: 10;
    position: absolute;

    bottom: 32px;
    right: 32px;

    border: 1px solid #dee2e6;
    border-radius: 4px;
    background-color: white;
    padding-top: 32px;
}

.controll {
    margin: 0;

    box-shadow: 0 5px 25px rgba(50, 50, 93, 0.05), 0 5px 15px rgba(0, 0, 0, 0.05);
    /* border: 1px solid #dee2e6; */
}

.controll .controll__item--circle {
    position: relative;
}

.controll__item--circle .controll__item--circle__inner {
    position: absolute;
    display: grid;
    justify-items: center;

    top: -74px;
    left: 50%;
    width: 74px;
    height: 74px;

    margin: 0;
    border-radius: 50%;
    transform: translateX(-50%);

    background-color: white;
    border: 1px solid #dee2e6;
    box-shadow: 0 5px 25px rgba(50, 50, 93, 0.05), 0 5px 15px rgba(0, 0, 0, 0.05);
}


.controll__item--circle .controll__item--circle__inner li {
    height: 24px;
}

.controll__item--circle .controll__item--circle__inner li a {
    display: block;
    line-height: 0;
}

.controll__item--circle .controll__item--circle__inner .controll__item--circle__inner__up {
    grid-row: 1;
    grid-column: 2;
}

.controll__item--circle .controll__item--circle__inner .controll__item--circle__inner__right {
    grid-row: 2;
    grid-column: 3;
}

.controll__item--circle .controll__item--circle__inner .controll__item--circle__inner__down {
    grid-row: 3;
    grid-column: 2;
}

.controll__item--circle .controll__item--circle__inner .controll__item--circle__inner__left {
    grid-row: 2;
    grid-column: 1;
}

.controll--item:last-child {
    border-bottom: 0;
}

.controll__item--list-item {
    display: block;
    line-height: 1;
    border-bottom: 1px solid #dee2e6;

    padding: 12px;
}
</style>
