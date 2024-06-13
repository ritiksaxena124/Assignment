import {
    Container,
    FirstCol,
    Sidebar,
    SidebarItemsList,
    TabMenu,
    LogoutBtn,
    TabIcon,
    TabTitle,
    SecondCol,
    ThirdCol,
    LogoContainer,
    SearchContainer,
    SearchField,
    BecomeSellerBtn
} from "./dashboard.style";

import SearchIcon from "../../assets/search-icon.svg";
import FilterIcon from "../../assets/filter-icon.svg";
import LogoutIcon from "../../assets/logout.svg";
import HomeIcon from "../../assets/home.svg";
import HeartIcon from "../../assets/heart.svg";
import NotificationIcon from "../../assets/notification.svg";
import MessageIcon from "../../assets/message.svg";
import WalletIcon from "../../assets/wallet.svg";
import SubscriptionIcon from "../../assets/subscription.svg";
import ProfileIcon from "../../assets/profile.svg";
import SettingIcon from "../../assets/setting.svg";
import FeedCard from "../FeedCard";

import { useRecoilState } from "recoil";
import authAtom from "../../store/atoms/authAtom";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Helmet } from "react-helmet";

const Dashboard = () => {
    const navigate = useNavigate();
    const [LoggedIn, setLoggedIn] = useRecoilState(authAtom);
    const SidebarItems = [{
        id: 1,
        title: "Home",
        icon: <HomeIcon width={24} height={24} />,
        active: true
    },
    {
        id: 2,
        title: "Notification",
        icon: <NotificationIcon width={24} height={24} />,
        active: false
    },
    {
        id: 3,
        title: "Shop",
        icon: <HeartIcon width={24} height={24} />,
        active: false

    },
    {
        id: 4,
        title: "Conversation",
        icon: <MessageIcon width={24} height={24} />,
        active: false

    },
    {
        id: 5,
        title: "Wallet",
        icon: <WalletIcon width={24} height={24} />,
        active: false

    },
    {
        id: 6,
        title: "Subscription",
        icon: <SubscriptionIcon width={24} height={24} />,
        active: false

    },
    {
        id: 7,
        title: "My Profile",
        icon: <ProfileIcon width={24} height={24} />,
        active: false

    },
    {
        id: 8,
        title: "Settings",
        icon: <SettingIcon width={24} height={24} />,
        active: false

    },
    ]

    useEffect(() => {
        if (!LoggedIn) {
            navigate("/login")
        }
    }, [LoggedIn])

    return <>
        <Helmet>
            <title>Dashboard | Assignment</title>
        </Helmet>
        <Container>
            <FirstCol>
                <LogoContainer>
                    <p>LOGO</p>
                </LogoContainer>

                <Sidebar>
                    <SidebarItemsList>
                        {
                            SidebarItems.map((item) => (
                                <TabMenu key={item.id} style={{ borderLeft: `${item.active ? "4px solid #0EC297" : "4px solid #fff"}` }}>
                                    <TabIcon height={24} width={24} src={item.icon.type} alt="icon" />
                                    <TabTitle style={{ color: `${item.active ? "#101010" : "#8d8d8d"}` }}>{item.title}</TabTitle>
                                </TabMenu>
                            ))
                        }
                    </SidebarItemsList>
                    <LogoutBtn onClick={() => setLoggedIn(false)}>
                        <TabIcon height={24} width={24} src={LogoutIcon} fill="#88C2BB" alt="icon" />
                        <TabTitle style={{ color: "#88C2BB" }}>Logout</TabTitle>
                    </LogoutBtn>
                </Sidebar>
            </FirstCol>
            <SecondCol>
                <SearchContainer>
                    <img height={26} width={26} src={SearchIcon} alt="search icon" />
                    <SearchField placeholder="Search here..." type="text"></SearchField>
                    <img height={26} width={26} src={FilterIcon} alt="filter icon" />
                    <span>Filters</span>
                </SearchContainer>
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
            </SecondCol>
            <ThirdCol>
                <BecomeSellerBtn>
                    Become a Seller
                </BecomeSellerBtn>
            </ThirdCol>
        </Container>
    </>
}

export default Dashboard;