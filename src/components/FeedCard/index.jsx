import styled from "styled-components"
import FeedImagePNG from "../../assets/feed-img.png"
import LikeIcon from "../../assets/heart.svg";
import CommentIcon from "../../assets/comment.svg";
import ShareIcon from "../../assets/share.svg";
import HeartIcon from "../../assets/HeartIcon";
const FeedCard = () => {
    return (
        <>
            <Container>
                <TopBar>
                    <UserDetails>
                        <UserAvatar>
                            <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt="" />
                        </UserAvatar>
                        <UserInfo>
                            <UserName>Lara Leones</UserName>
                            <MentionedName>@thewallart</MentionedName>
                        </UserInfo>
                    </UserDetails>
                    <ExpandedMenu>
                        &#8942;
                    </ExpandedMenu>
                </TopBar>
                <Description>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span> Read More </span>
                </Description>
                <FeedImageContainer>
                    <FeedImage src={FeedImagePNG} alt="Feed image" />
                </FeedImageContainer>
                <Interactions>
                    <InteractionBtn>
                        <HeartIcon width={24} height={24} />
                        <Title>9.8k</Title>
                    </InteractionBtn>
                    <InteractionBtn>
                        <Icon src={CommentIcon} width={24} height={24} />
                        <Title>8.6k</Title>
                    </InteractionBtn>
                    <InteractionBtn>
                        <Icon src={ShareIcon} width={24} height={24} />
                        <Title>7.2k</Title>
                    </InteractionBtn>
                </Interactions>
            </Container>
        </>
    )
}

export default FeedCard;

const Container = styled.div`
    background: #fff;
    border-radius: 0.5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    
`
const UserAvatar = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    overflow: hidden;
    border-radius: 0.5rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`
const UserName = styled.h4`
    font-size: 1.25rem;
`
const MentionedName = styled.span`
    color: #8D8D8D;
    font-size: 0.875rem;
`
const UserDetails = styled.div`
display: flex;
    gap: 1rem;
    align-items: center;
`
const ExpandedMenu = styled.div`
    font-size: 2rem;
    cursor: pointer;
    padding: 0.25rem 1rem;
    border-radius: 0.5rem;

    &:hover{
        background: #F5F5F5;
    }
`
const Description = styled.p`
    line-height: 24px;

    span{
        color: #FF5E8A;
        cursor: pointer;
    }
`
const FeedImageContainer = styled.div`
    width: 100%;
    height: 406px;
    border-radius: 0.5rem;
    overflow: hidden;
`
const FeedImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Interactions = styled.div`
    border-top: 1px solid #D0D5DD;
    padding: 1.5rem 1rem; 
    margin-top: 1.5rem;
    display: flex;
    gap: 2rem;
`
const InteractionBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`
const Icon = styled.img``
const Title = styled.span`
    font-size: 1.25rem;
    font-weight: 500;
`