import React, {useState} from "react";
import {ShoppingList} from "../../components/useStateComponents/ShoppingList.tsx";
import {products} from "../../shared/lib/consts.ts";
import  './UseStatePage.css';
import {MyButton} from "../../components/useStateComponents/MyButton.tsx";

export const UseStatePage: React.FC = () => {
    {/* Обновление экрана */}
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [count, setCount] = useState(0);

    function handleCountClick () {
        setCount(count + 1);
    }



    return (
        <>
            <div className={'main-div'}>
                {/* Условный рендеринг */}
                <button className={'classic-bottom'} onClick={() => setIsLoggedIn(!isLoggedIn)}>State Changer</button>
                <div className={'classic-bottom normal-font'}>{isLoggedIn ? <div>1 State </div> : <div>2 State</div>  }</div>

                {/* Рендеринг списков */}
                <ShoppingList products={products}></ShoppingList>

                {/* Различные состояния кликеров */}
                <div> Различные значения кликеров</div>
                <MyButton count={null} onClick={()=>{}}/>
                <MyButton count={null} onClick={()=>{}} />

                {/* Одинаковые состояния кликеров */}
                <div> Одинаковые значения кликеров</div>
                <MyButton count={count} onClick={handleCountClick}/>
                <MyButton count={count} onClick={handleCountClick}/>





            </div>



        </>
    )
};
