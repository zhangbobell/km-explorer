
type fileType = 'directory' | 'file';
type shareType = 'public' | 'private';
type extType = '' | '.km';
type deleteType = 0 | 10 | 11;
type removeType = 0 | 1;

export interface File {
    fileGuid: string;
    fileName: string;
    extName: extType;
    parentGuid: string;
    fileType: fileType;
    shareType: shareType;
    
    ownerId: string;
    createrId: string;
    createrName: string;
    createTime: Date;

    isDeleted: deleteType,
    deletedTime: Date;
    
    isRemoved: removeType,
    removedTime: Date;
    
    lastModifiedTime: Date,
    lastModifiedUser: string;
    lastModifiedUserName: string;

    size: number;
    version: number;
    bosGuid: string;
}