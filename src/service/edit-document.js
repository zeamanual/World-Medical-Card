import { clientInstance } from "../config/config";

<<<<<<< HEAD
const editFile = (document,documentTitle,documentType,description, documentId) => {
    let formData = new FormData();
    console.log("update");
    formData.append("File", document);
    formData.append("Title", documentTitle);
    formData.append("Catagory", documentType);
    formData.append('Description', description);

    return clientInstance.put(`/api/Document/Update/${documentId}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            },
        }
            )
  

}

export default editFile;
=======
const editFile = (id) => {
  return clientInstance.post(`/api/Document/Update/${id}`);
};

export default editFile;
>>>>>>> main
