<script setup></script>

<template>
    <div class="bg-neutral-50 min-h-screen">
        <slot name="header" />

        <div class="px-6 w-full">
            <div class="max-w-3xl mx-auto w-full">
                <slot />
            </div>
        </div>
    </div>
</template>
