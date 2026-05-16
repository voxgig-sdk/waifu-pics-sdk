package core

type WaifuPicsError struct {
	IsWaifuPicsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWaifuPicsError(code string, msg string, ctx *Context) *WaifuPicsError {
	return &WaifuPicsError{
		IsWaifuPicsError: true,
		Sdk:              "WaifuPics",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WaifuPicsError) Error() string {
	return e.Msg
}
