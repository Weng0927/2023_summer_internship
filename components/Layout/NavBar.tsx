import style from './NavBar.module.css'
import Link from 'next/link'


function NavBar()  {
    return (
        <div className={style.nav_bar}>
            <div className={style.nav_bar_item}>
                <Link href='/SummerWork/2023_summer_internship/public'>首页</Link>
            </div>
            <div className={style.nav_bar_item}>
                <Link href='/AntvX6'>AntVX6测试</Link>
            </div>
            <div className={style.nav_bar_item}>
                <Link href='/konva.js'>konva.js测试</Link>
            </div>
            <div className={style.nav_bar_item}>
                <Link href='/maxGraph'>maxGraph测试</Link>
            </div>
        </div>
    )
}

export default NavBar;
