var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inp = document.getElementById('tasks');
let massegPlan = '';
inp.addEventListener('click', e => {
    e.preventDefault();
    let targets = e.target;
    const taskList = document.getElementById('tasks__list');
    let lines = getElementId();
    /* there is adding massegs of a plan - start*/
    if (targets.classList.value.includes('tasks__add') && ine().length > 0 && ine() !== " ") {
        localStorage.setItem(`plan_${lines.length + 1}`, ine().trim());
        massegPlan += `<div class="task" id="plan_${lines.length + 1}">
		<div class="task__title">
			${ine().trim()}
		</div>
		<a href="#" class="task__remove">&times;</a>
	</div>`;
        taskList.innerHTML = massegPlan;
        ine(true);
        /* there is adding massegs of a plan - end*/
    }
    else if (targets.classList.value.includes('task__remove')) { // Her is remove the line of plans.
        let lineOfPlan = targets.closest('.task');
        let lineId = lineOfPlan.getAttribute('id');
        lineOfPlan.remove();
        lines = getElementId();
        localStorage.removeItem(lineId);
        linesList(lines);
        // localStorage.removeItem(`plan_${lines.length}`); 
    }
    function getElementId() {
        return taskList.getElementsByClassName('task');
    }
    function linesList(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            let plans = '';
            massegPlan = '';
            for (let elem of obj) {
                plans += String(elem.outerHTML);
            }
            massegPlan = plans;
        });
    }
});
function ine(varieblString = false) {
    const inputElem = document.getElementById('task__input');
    if (varieblString === false) { // her is get the masseg of input form.
        if (inputElem.value.length > 0) {
            return inputElem.value;
        }
    }
    else {
        inputElem.value = '';
    }
    return "";
}
