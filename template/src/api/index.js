import Util from '@/libs/util'

export const getToken = data => Util.http.get('/core/wx-token?code=' + data.code, {});
