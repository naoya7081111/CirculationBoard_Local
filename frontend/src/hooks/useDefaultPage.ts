/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useCommunityMembers } from "./context/useCommunityMembers";
import { useLoginCommunity } from "./context/useLoginCommunity";
import { useNewsLists } from "./context/useNewsLists";
import { useMembersGet } from "./members/useMembersGet";
import { useNewsGet } from "./news/useNewsGet";
import { useCommunityListsGet } from "./useCommunityListsGet";

export const useDefaultPage = () => {

    const { loginCommunity } = useLoginCommunity();
    const { setCommunityMembers } = useCommunityMembers();
    const { setNewsLists } = useNewsLists();
    const { membersGet } = useMembersGet();
    const { newsGet } = useNewsGet();
    const { communityListsGet } = useCommunityListsGet();

    const defaultPage = useCallback( () => {

        communityListsGet();
        if (loginCommunity === null) {
            setCommunityMembers([]);
            setNewsLists([]);
        } else {
            membersGet();
            newsGet();
        }    
    }, [loginCommunity]);
    return {defaultPage};
}

// ๐Homeใฎใใผใธใใชใญใผใใใใจใ๏ผๅๅใฌใณใใชใณใฐใใใใใใฃใจใใ้ๅๆๅฆ็ใฎๆธใๆนใใใใฐๅคๆดใใ