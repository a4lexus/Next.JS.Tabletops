import createWorkshop from "@/app/actions/create-workshop";

const CreateWorkshop = () => {
  return <div>
    <form action={createWorkshop} >
        <input type="text" name="name" placeholder="Name"/>
        <input type="text" name="description" placeholder="Description"/>
        <input type="number" name="price" placeholder="10"/>
        <input type="datetime-local" name="datetime" />
        
        <input type="radio" name="isPublished" value="true" id="published"/>
        <label htmlFor="">Is Published</label> 
        
        <input type="radio" name="isPublished" value="" id="not-published"/>
        <label htmlFor="">Not Published</label>
        <button type="submit">Save</button>
    </form>
  </div>;
};

export default CreateWorkshop;
