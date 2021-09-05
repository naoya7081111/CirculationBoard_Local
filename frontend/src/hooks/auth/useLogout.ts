import axios from "axios";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useLoginCommunity } from "../context/useLoginCommunity";
import { useLoginUser } from "../context/useLoginUser";
import { useMessage } from "../useMessage";

export const useLogout = () => {

    const history = useHistory();
    const { setLoginUser } = useLoginUser();
    const { showMessage } = useMessage();
    const { setLoginCommunity } = useLoginCommunity();

    const logout = useCallback(() => {
        axios.get('/api/logout').then((res) => {
            setLoginUser(null);
            setLoginCommunity(null);
            history.push('/');
            showMessage({ title: res.data.message, status: "success" })
        }).catch((error) => {
            showMessage({ title: "ログアウトに失敗しました",  status: "error"});
        })        
    }, [setLoginUser, showMessage, setLoginCommunity, history]);

    return { logout };
};