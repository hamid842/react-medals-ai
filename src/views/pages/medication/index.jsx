import { useState , useEffect } from "react";
// project imports
import PrescriptionItem from "./PrescriptionItem";
import Loading from "@/ui-component/Loading";
import { prescriptions$ } from "@/api/get-prescriptions-for-current-user";

// ============================|| MEDICATION HISTORY ||============================ //

const MedicationHistory = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  // const dummyPrescriptions = [
  //   {
  //     id:1,
  //     medicine:{
  //       brandName:"Aspirin",
  //       usageDescription:"Take 1 tablet"
  //     }
  //   },
  //   {
  //     id:2,
  //     medicine:{
  //       brandName:"Acetaminophen",
  //       usageDescription:"Take 1 tablet"
  //     }
  //   },
  //   {
  //     id:3,
  //     medicine:{
  //       brandName:"Zip mit",
  //       usageDescription:"Take 1 tablet"
  //     }
  //   }
  // ]

  useEffect(() => {
    prescriptions$.subscribe({
      next: (data) => setPrescriptions(data),
      error: (error) => console.log(error),
      complete: () => console.log("prescriptions fetched for current user"),
    });
  }, []);
  return (
    <>
      {prescriptions?.length ? (
          prescriptions?.map((prescription) => {
          return (
            <PrescriptionItem
              key={prescription?.id}
              prescription={prescription}
            />
          );
        })
      ) : (
        <Loading visible={prescriptions.length === 0} />
      )}
    </>
  );
};
export default MedicationHistory;
