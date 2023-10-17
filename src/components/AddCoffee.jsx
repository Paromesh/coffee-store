import Swal from 'sweetalert2';
const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title:'Success!',
                    text:'Coffee Added Successfully',
                    icon:'success',
                    confirmButtonText:'cool'
                })
            }
        })
    }
  return (
    <div className="bg-[#e8e3d3] p-24">
      <h2 className="text-4xl font-bold text-red-400 mb-4">Add a Coffee</h2>
      <p className="mb-4 text-red-500">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity ror */}
        <div className="md:flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium text-red-500">
                Coffee Name
              </span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium text-red-500">
                Available Quantity
              </span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium text-red-500">
                Supplier Name
              </span>
            </label>
            <label className="input-group">
              <input
                name="supplier"
                type="text"
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium text-red-500">
                Taste
              </span>
            </label>
            <label className="input-group">
              <input
                name="taste"
                type="text"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-6 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium text-red-500">
                Category
              </span>
            </label>
            <label className="input-group">
              <input
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium text-red-500">
                Details
              </span>
            </label>
            <label className="input-group">
              <input
                name="details"
                type="text"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className="mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-medium text-red-500">
                Photo URL
              </span>
            </label>
            <label className="input-group">
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
