import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/navigation";
import { whiteColor, blackColor } from "../../styles/colors";
import { IMenuHome } from "@/app/interfaces/IMenuHome";

export default function CustomMenuHome({ items }: IMenuHome) {
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: whiteColor.whiteColorBase,
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        padding: 3,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          onClick={() => router.push(item.link)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
            ":hover": {
              opacity: 0.85,
            },
          }}
        >
          <CheckCircleIcon sx={{ color: "#FFA500", fontSize: 26 }} />
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: 500,
              color: blackColor.blackColorBase,
              lineHeight: "24px",
            }}
          >
            {item.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
