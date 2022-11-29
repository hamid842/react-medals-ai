import { useState , useEffect } from "react";
// project imports
import PrescriptionItem from "./PrescriptionItem";
import Loading from "@/ui-component/Loading";
import { prescriptions$ } from "@/api/get-prescriptions-for-current-user";

// ============================|| MEDICATION HISTORY ||============================ //

const MedicationHistory = () => {
  const [prescriptions, setPrescriptions] = useState([]);

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
