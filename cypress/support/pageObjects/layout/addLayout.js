import { addBtn, clickAddLayoutButton, clickEditLayoutButton, layoutAddBtn, selectHeaderLayoutCard } from "../../../componentObjects/Layout/layoutButton";
import { clickDropDownButton } from "../../../componentObjects/Layout/Shared/dropdown";


class layout {
    addlayout (){
        clickEditLayoutButton()
        clickAddLayoutButton()        
    }
}

export const journeyLayout = new layout()