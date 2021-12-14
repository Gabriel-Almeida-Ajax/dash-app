import React, { createContext, useCallback, useContext, useState } from 'react'

export interface IAppProviderProps {
}
export interface ITheme {
    primary: string
    secondary: string
    background: string
    text: string
    dashlayout: string
}
export interface IItem {
    id: string
    type: "img" | "text"
    content: string
    callback: () => void
}
export interface IDashItem {
    id: string
    title: string
    content: string
    footer: string
    color: string
    callback: () => void
}
export interface IDashMove {
    id: string
    title: string
    value: string
    callback: () => void
}
export interface IDashConfig {
    title: string
    layout: string
}
export interface IAppContext {
    theme: ITheme
    setTheme: React.Dispatch<React.SetStateAction<ITheme>>
    getNavBarItems: () => IItem[]
    getLateralBarItems: () => IItem[]
    getDashboardItems: () => IDashItem[]
    getDashboardMoves: () => IDashMove[]
    getDashboardConfig: () => IDashConfig
    useUserImage: () => any[]
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
    const [userImage, setUserImage] = useState('');
    const [theme, setTheme] = useState<ITheme>({
        primary: "#00a8ff",
        secondary: "#ff00a8",
        background: "#ffffff",
        text: "#000000",
        dashlayout: `grid-template-columns: repeat(2, 1fr);grid-template-rows: repeat(3, 1fr);grid-template-areas: "receber  movimento" "pagar movimento" "saldo movimento";`,
    });

    const [switchDash] = useState({
        dash1() {
            setTheme({
                primary: "#00a8ff",
                secondary: "#ff00a8",
                background: "#ffffff",
                text: "#000000",
                dashlayout: `grid-template-columns: repeat(2, 1fr);grid-template-rows: repeat(3, 1fr);grid-template-areas: "receber  movimento" "pagar movimento" "saldo movimento";`,
            });
        },
        dash2() {
            setTheme({
                primary: "#00a8ff",
                secondary: "#ff00a8",
                background: "#ffffff",
                text: "#000000",
                dashlayout: `grid-template-columns: repeat(3, 1fr);grid-template-rows: repeat(3, 1fr);grid-template-areas: "receber pagar movimento" "saldo saldo movimento" "x x x";`,
            });
        },
        dash3() {
            setTheme({
                primary: "#00a8ff",
                secondary: "#ff00a8",
                background: "#ffffff",
                text: "#000000",
                dashlayout: `grid-template-columns: repeat(3, 1fr);grid-template-rows: repeat(3, 1fr);grid-template-areas: "receber pagar saldo" "movimento movimento movimento" "movimento movimento movimento";`,
            });
        }
    })

    const getNavBarItems = useCallback(() => {
        return [
            {
                id: "user name",
                type: "text",
                content: "Olá, Gabriel !",
                callback: () => {
                    console.log("Home");
                }
            },
            {
                id: "user image",
                type: "img",
                content: "https://t.ctcdn.com.br/9gLqHTtYfSakgh1UGmYO1VI8_nM=/720x405/smart/i387896.jpeg",
                callback: () => {
                    console.log("About");
                }
            }
        ];
    }, []);

    const getLateralBarItems = useCallback(() => {
        return [
            {
                id: "Logo",
                type: "text",
                content: "Logo",
                callback: () => {
                    console.log("Logo");
                }
            },
            {
                id: "about",
                type: "text",
                content: "About",
                callback: () => {
                    window.open("https://github.com/Gabriel-Almeida-Ajax");
                }
            },
            {
                id: "contact",
                type: "text",
                content: "Contact",
                callback: () => {
                    window.open("https://www.linkedin.com/in/gabriel-santos-lima-8b25711a8/");
                }
            },
            {
                id: "dashboard1",
                type: "text",
                content: "Template 1",
                callback: () => {
                    switchDash.dash1();
                }
            },
            {
                id: "dashboard2",
                type: "text",
                content: "Template 2",
                callback: () => {
                    switchDash.dash2();
                }
            },
            {
                id: "dashboard3",
                type: "text",
                content: "Template 3",
                callback: () => {
                    switchDash.dash3();
                }
            },
            {
                id: "loginout",
                type: "text",
                content: "Login out",
                callback: () => {
                    console.log("Login out");
                }
            }
        ];
    }, [switchDash]);

    const getDashboardItems = useCallback(() => {
        return [
            {
                id: "pagar",
                title: "Gastos",
                content: "R$ 375.897,00",
                footer: "Lorem ipsum dolor sit amet.",
                color: "#d30000",
                callback: () => {
                    console.log("Dashboard");
                }
            },
            {
                id: "receber",
                title: "Receitas",
                content: "R$ 375.897,00",
                footer: "Lorem ipsum dolor sit amet.",
                color: "#00c2db",
                callback: () => {
                    console.log("Dashboard");
                }
            },
            {
                id: "saldo",
                title: "Saldo",
                content: "R$ 375.897,00",
                footer: "Lorem ipsum dolor sit amet.",
                color: "#08e600",
                callback: () => {
                    console.log("Dashboard");
                }
            }
        ];
    }, []);

    const getDashboardMoves = useCallback(() => {
        return [
            {
                id: '1',
                title: "Plano TIM",
                value: "R$ 97,00 -",
                callback: () => {
                    console.log("Dashboard");
                }
            },
            {
                id: '2',
                title: "Presentes Natal",
                value: "R$ 897,00 -",
                callback: () => {
                    console.log("Dashboard");
                }
            },
            {
                id: '3',
                title: "Salario",
                value: "R$ 3.000,00 +",
                callback: () => {
                    console.log("Dashboard");
                }
            },
        ];
    }, []);

    const getDashboardConfig = useCallback(() => {
        return {
            title: "Dashboard",
            layout: theme.dashlayout
        }
    }, [theme]);

    const useUserImage = useCallback(() => [userImage, setUserImage], [userImage]);

    const provider = {
        theme,
        setTheme,
        getNavBarItems,
        getLateralBarItems,
        getDashboardItems,
        getDashboardMoves,
        getDashboardConfig,
        useUserImage
    } as IAppContext;

    return (
        <AppContext.Provider value={provider}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}