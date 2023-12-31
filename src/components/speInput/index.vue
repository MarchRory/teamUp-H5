<script setup lang="ts">
import { debounce } from "@/utils/fluentCtrl";
import { filterCN } from "@/utils/filter/input";
defineProps<{
  value: string;
  placeholder?: string;
  maxlength?: number;
  password?: boolean;
}>();
const emits = defineEmits<{
  (e: "update:value", value: string): void;
}>();
const onchange = debounce((e: InputEvent) => {
  emits("update:value", (e.target as HTMLInputElement).value);
});
</script>

<template>
  <div style="width: fit-content">
    <input
      class="px-4 py-2 b-0 border-b-2 border-gray-300 font-bold m-auto w-1/1"
      style="transform: translateX(-1rem)"
      :type="password ? 'password' : 'text'"
      :placeholder="placeholder ?? '请输入内容'"
      :value="value"
      :maxlength="maxlength ?? 25"
      @input.trim="(e: Event) => onchange(e as InputEvent)"
      @keyup="filterCN"
    />
  </div>
</template>

<style scoped></style>
