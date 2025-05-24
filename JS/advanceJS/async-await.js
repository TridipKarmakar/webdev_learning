function fetchUserData() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved = true;
      if (resolved) {
        resolved({ name: "Chaicode", url: "https://chaicode.com" });
      } else {
        reject(`Data Not fetch`);
      }
    }, 3000);
  });
}

async function getUserdata() {
  try {
    console.log(`Fetching user data...`);
    const userData = await fetchUserData();
    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

// getUserdata();

function fetchAllUserData() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      success = true;
      if (success) {
        resolved({ name: "All users are active", Count: 24 });
      } else {
        reject(`Data Not fetch`);
      }
    }, 3000);
  });
}

function fetchCommonUserData() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      success = true;
      if (success) {
        resolved({ name: "Chaicode", url: "https://chaicode.com" });
      } else {
        reject(`Data Not fetch`);
      }
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data");
    const allUser = await fetchAllUserData();
    const allCommonUser = await fetchCommonUserData();
    console.log(allUser);
    console.log(allCommonUser);
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}

getBlogData();
