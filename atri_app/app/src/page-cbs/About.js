import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useImage3Cb() {
	const onClick = useCallback(callbackFactory("Image3", "About", "/About", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}