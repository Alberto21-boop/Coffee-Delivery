import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";


interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export function AddressForm() {

  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <Input placeholder="CEP" type="number" className="cep"
        {...register("cep")} error={errors.cep?.message}
      />

      <Input placeholder="Rua" className="street"
        {...register("Rua")} error={errors.Rua?.message}
      />

      <Input placeholder="Número" type="number"
        {...register("Número")} error={errors.Numero?.message}
      />

      <Input placeholder="Complemento" className="complement"
        {...register("Complemento")} error={errors.Complemento?.message}
        rightText="Optional"
      />

      <Input placeholder="Bairro"
        {...register("Bairro")} error={errors.Bairro?.message}
      />

      <Input placeholder="Cidade"
        {...register("Cidade")} error={errors.Cidade?.message}
      />

      <Input placeholder="UF"
        {...register("uf")} error={errors.uf?.message}
      />

    </AddressFormContainer>
  );
}