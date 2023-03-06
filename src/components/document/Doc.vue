
<script setup  lang="ts">
import { useDocStore } from '@/stores/DocStore';
const DocStore = useDocStore();
DocStore.getData();



</script>

<template>
    <div class="document-wrapper">

        <div class="doc" v-for="document in DocStore.data" :key="document.id">
            <p class="document-header">Наименование</p>
            <div class="document">
                <p class="document-name">{{ document.fileTypeName }}</p>
                <div class="img-block">
                    <img src="https://www.svgrepo.com/show/479481/trash-can.svg" alt="can">
                </div>
            </div>
            <div class="file-block">
                <div class="file-info">
                    <div class="icon"></div>
                    <!-- <img class="file-img" src="https://cdn-icons-png.flaticon.com/128/8450/8450927.png" alt="file"> -->
                <span>{{ document.fileName }}</span>
            </div>
                <input type="file" class="file-input" @change="DocStore.sendData">
                <div class="file-bottom">
                    <span>0 / 6MB</span>

                    <div class="file-bottom__btns">
                        <button @click="DocStore.uploadData" class="upload-btn">
                            <img src="https://cdn-icons-png.flaticon.com/128/7989/7989048.png" alt="">
                            <span>Вложить</span>
                        </button>

                        <!-- <button @click="DocStore.sendData">
                                        Отправить
                                    </button> -->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.document-wrapper {
    color: black;
    width: 100%;
}

.doc {
    width: 500px;
    background-color: #fff;
    padding: 25px 12px;
    margin: 0 auto 20px;

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
    cursor: pointer;
}
</style>