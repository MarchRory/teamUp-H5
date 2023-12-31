import { debounce } from "../fluentCtrl";
import { cn_Reg } from "../regExp";


// 过滤中文
export const filterCN = debounce((e: Event) => {
    (e.target as HTMLInputElement).value = (
        e.target as HTMLInputElement
    ).value.replace(cn_Reg, "");
}, 600)