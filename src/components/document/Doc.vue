
<script setup  lang="ts">
import { useDocStore } from '@/stores/DocStore';

const DocStore = useDocStore();
DocStore.getData();
// import { ref } from '@vue/reactivity';

// interface RootObject {
//     id: string;
//     processInstanceId: string;
//     iin?: any;
//     fileTypeId: string;
//     fileTypeName: string;
//     fileId: string;
//     page: number;
//     fileName: string;
//     fileTypeCode: string;
//     sharedId?: any;
//     signed?: any;
//     signId?: any;
//     certificateDate?: any;
// }

// const data = ref<RootObject>()
// async function getData() {
//     let response = await fetch("https://products.halyklife.kz/api/v1/test/insis/arm/api/File/List", {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json, text/plain',
//             'Content-Type': 'application/json;charset=UTF-8',
//             'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
//         },
//         body: JSON.stringify({
//             processInstanceId: "0370c1fd-3b3d-4974-a0cb-23e8ccc727cd"
//         })
//     })
//     let result = await response.json();
//     data.value = result.filter((item: { fileTypeName: string; }) => item.fileTypeName == "Удостоверение личности")[0]
//     let check = result.filter((item: { fileTypeName: string; }) => item.fileTypeName == "final test")
//     console.log(check);
// }
// getData()

// async function uploadData() {
//     let fileInput = document.querySelector<any>(".file-input");
//     fileInput.click();
// }

// async function sendData() {
//     let fileInput = document.querySelector<any>(".file-input");
//     let formData = new FormData();
//     formData.append("file", fileInput.files[0]);
//     let file = formData.get("file");
//     let fileName;
//     if (file instanceof File) {
//         fileName = file.name
//     }
//     let data = [{
//         processInstanceId: "084d012d-4350-4513-9985-2bfe260aca6b",
//         fileTypeCode: "7",
//         page: 3,
//         fileName: fileName
//     }]
//     formData.append("fileData", JSON.stringify(data))

//     let response = await fetch('https://products.halyklife.kz/api/v1/test/insis/arm/api/File/UploadFiles', {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
//         },
//         body: formData
//     });
//     let result = await response.json();
// }
</script>

<template>
    <div class="document-wrapper">
        <p class="document-header">Наименование</p>
        <div class="document">
            <p class="document-name">{{ DocStore.data?.fileTypeName }}</p>
            <div class="img-block">
                <img src="https://www.svgrepo.com/show/479481/trash-can.svg" alt="can">
            </div>
        </div>
        <div class="file-block">
            <div class="file-info">
                <div class="icon"></div>
                <!-- <img class="file-img" src="https://cdn-icons-png.flaticon.com/128/8450/8450927.png" alt="file"> -->
                <span>{{ DocStore.data?.fileName }}</span>
            </div>
            <input type="file" class="file-input">
            <div class="file-bottom">
                <span>0 / 6MB</span>

                <div class="file-bottom__btns">
                    <button @click="DocStore.uploadData" class="upload-btn">
                        <img src="https://cdn-icons-png.flaticon.com/128/7989/7989048.png" alt="">
                        <span>Вложить</span>
                    </button>

                    <button @click="DocStore.sendData">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.document-wrapper {
    color: black;
    background-color: #fff;
    width: 40%;
    padding: 25px 12px;
    margin-top: 12%;
    margin-left: 50%;
    transform: translate(-50%, -12%);
}

.document-header {
    font-weight: 500;
}

.document {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
}

.document-name {
    font-weight: 400;
}

.icon {
    width: 26px;
    height: 26px;
    display: inline-block;

    -webkit-mask: url(https://cdn-icons-png.flaticon.com/128/8450/8450927.png) no-repeat 50% 50%;
    mask: url(https://cdn-icons-png.flaticon.com/128/8450/8450927.png) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background-color: #30ae8f;
}

.file-info {
    margin-left: 30px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    color: #30ae8f;
    gap: 12px;
}

.file-info span {
    font-weight: 500;
}

.img-block {
    padding: 10px;
    background: #67b3ac;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-block img {
    width: 26px;
    height: 26px;
}

.file-img {
    width: 26px;
    height: 26px;
}

.file-bottom {
    display: flex;
    align-items: center;
    gap: 35px;
    border-bottom: 2px solid #f5f5f5;
    padding-bottom: 8px;
}

.file-bottom>span {
    text-decoration: line-through;
    text-decoration-color: red;
    text-decoration-thickness: 1.5px;
    font-weight: 500;
}

.file-bottom__btns {
    display: flex;
    align-items: center;
}

.upload-btn {
    position: relative;
    width: 150px;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
}

.upload-btn img {
    transform: rotate(90deg);
    width: 32px;
    height: 32px;
}

.file-input {
    color: transparent;
    width: 100px;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5; */
    /* visibility: hidden; */
    /* opacity: 0; */
    cursor: pointer;
}
</style>