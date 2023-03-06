import { defineStore } from "pinia";
import { ref } from "vue";

interface RootObject {
    id: string;
    processInstanceId: string;
    iin?: any;
    fileTypeId: string;
    fileTypeName: string;
    fileId: string;
    page: number;
    fileName: string;
    fileTypeCode: string;
    sharedId?: any;
    signed?: any;
    signId?: any;
    certificateDate?: any;
}

export const useDocStore = defineStore("DocStore", () => {
    const data = ref<RootObject>()

    async function getData() {
        let response = await fetch("https://products.halyklife.kz/api/v1/test/insis/arm/api/File/List", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({
                processInstanceId: "0370c1fd-3b3d-4974-a0cb-23e8ccc727cd"
            })
        })
        let result = await response.json();
        data.value = result;
        console.log(data.value);

        // data.value = result.filter((item: { fileTypeName: string; }) => item.fileTypeName == "Удостоверение личности")[0];
    }

    async function uploadData() {
        let fileInput = document.querySelector<any>(".file-input");
        fileInput.click();
        // fileInput?.addEventListener("change", uploadData)
        
    }

    async function sendData() {
        let fileInput = document.querySelector<any>(".file-input");
        let formData = new FormData();

        // fileInput.click();
        formData.append("file", fileInput.files[0]);
        let file = formData.get("file");
        let fileName;

        if (file instanceof File) {
            fileName = file.name
        }

        let data = [{
            processInstanceId: "084d012d-4350-4513-9985-2bfe260aca6b",
            fileTypeCode: "7",
            page: 3,
            fileName: fileName
        }]
        formData.append("fileData", JSON.stringify(data))

        try {
            let response = await fetch('https://products.halyklife.kz/api/v1/test/insis/arm/api/File/UploadFiles', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: formData
            });
            if (response.ok) {
                alert("Данные загружены")
                formData.delete("file")
            }
        } catch (error) {
            alert(error)
        }
    }

    return {
        sendData,
        getData,
        uploadData,
        data
    }
})