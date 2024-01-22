import request from '@/axios';

export const getList = (current, size, params, deptId) => {
  return request({
    url: '/blade-system/user/page',
    method: 'get',
    params: {
      ...params,
      current,
      size,
      deptId,
    },
  });
};

export const remove = ids => {
  return request({
    url: '/blade-system/user/remove',
    method: 'post',
    params: {
      ids,
    },
  });
};

export const add = row => {
  return request({
    url: '/blade-system/user/submit',
    method: 'post',
    data: row,
  });
};

export const update = row => {
  return request({
    url: '/blade-system/user/update',
    method: 'post',
    data: row,
  });
};

export const updatePlatform = (userId, userType, userExt) => {
  return request({
    url: '/blade-system/user/update-platform',
    method: 'post',
    params: {
      userId,
      userType,
      userExt,
    },
  });
};

export const getUser = id => {
  return request({
    url: '/blade-system/user/detail',
    method: 'get',
    params: {
      id,
    },
  });
};

export const getUserPlatform = id => {
  return request({
    url: '/blade-system/user/platform-detail',
    method: 'get',
    params: {
      id,
    },
  });
};

export const getUserInfo = () => {
  return request({
    url: '/blade-system/user/info',
    method: 'get',
  });
};

export const resetPassword = userIds => {
  return request({
    url: '/blade-system/user/reset-password',
    method: 'post',
    params: {
      userIds,
    },
  });
};

export const updatePassword = (oldPassword, newPassword, newPassword1) => {
  return request({
    url: '/blade-system/user/update-password',
    method: 'post',
    params: {
      oldPassword,
      newPassword,
      newPassword1,
    },
  });
};

export const updateInfo = row => {
  return request({
    url: '/blade-system/user/update-info',
    method: 'post',
    data: row,
  });
};

export const grant = (userIds, roleIds) => {
  return request({
    url: '/blade-system/user/grant',
    method: 'post',
    params: {
      userIds,
      roleIds,
    },
  });
};

export const unlock = userIds => {
  return request({
    url: '/blade-system/user/unlock',
    method: 'post',
    params: {
      userIds,
    },
  });
};
