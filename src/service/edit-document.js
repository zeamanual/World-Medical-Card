import { clientInstance } from "../config/config";

const editFile = (document,documentTitle,documentType,documentId) => {
    let formData = new FormData();
    console.log("update")
    formData.append("File", document);
    formData.append("Title", documentTitle);
    formData.append("Catagory", documentType);

    return clientInstance.put(`/api/Document/Update/${documentId}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            },
        }
            )
  

}

export default editFile;