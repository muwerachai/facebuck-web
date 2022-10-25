import PostBody from "./body/PostBody";
import PostHeader from "./header/PostHeader";

function PostItem() {
    return (
    <div className="border bg-white rounded-lg  shadow-sm px-3 tw-pt-3">
      <PostHeader />
      <PostBody />
    </div>
    );
  }
  
  export default PostItem;