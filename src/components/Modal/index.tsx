import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export interface BasicModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  modalTitle: string;
  toggleModal: (arg0: boolean) => void;
}
export default function BasicModal(basicModalProps: BasicModalProps) {
  const { isOpen, toggleModal, children, modalTitle } = basicModalProps;
  // const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      {/* <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button> */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isOpen}
        onClose={toggleModal}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            {modalTitle}
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            {children}
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
